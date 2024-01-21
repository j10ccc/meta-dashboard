import { useRef, useState } from "react";
import type { RawTrafficRate, TrafficRate } from "@/interfaces/Traffic";
import { convertRateUnit } from "@/utils/traffic";

function useTrafficRate() {
  const [rate, setRate] = useState<TrafficRate>();
  const socketRef = useRef<WebSocket>();

  function subscribe(endpointURL: string) {
    const wsURL = endpointURL.replace("http://", "ws://");
    if (!socketRef.current) {
      socketRef.current = new WebSocket(`${wsURL}/traffic`);
      socketRef.current.addEventListener("message", (e) => {
        const data: RawTrafficRate = JSON.parse(e.data);
        setRate({ up: convertRateUnit(data.up), down: convertRateUnit(data.down) });
      });
    }
  }

  function unsubscribe() {
    socketRef.current?.close();
  }

  return {
    currentTraffic: rate,
    subscribe,
    unsubscribe
  };
}

export default useTrafficRate;