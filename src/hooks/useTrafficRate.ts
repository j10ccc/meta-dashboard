import { useMemo, } from "react";
import type { RawTrafficRate, TrafficRate } from "@/interfaces/Traffic";
import { convertRateUnit } from "@/utils/traffic";
import useWebsocket from "./useWebsocket";

function useTrafficRate(endpointURL: string) {
  const { data, connected, subscribe: _subscribe, unsubscribe } = useWebsocket<RawTrafficRate>("/traffic");
  const rate = useMemo<TrafficRate>(() => {
    return {
      up: convertRateUnit(data?.up || 0),
      down: convertRateUnit(data?.down || 0)
    };
  }, [data]);

  function subscribe() {
    _subscribe(endpointURL);
  }

  return {
    connected,
    currentTraffic: rate,
    subscribe,
    unsubscribe
  };
}

export default useTrafficRate;