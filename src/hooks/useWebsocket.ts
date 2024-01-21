import { useRef, useState } from "react";

function useWebsocket<DataType>(path: string, timeout = 5000) {
  const socketRef = useRef<WebSocket>();
  const [data, setData] = useState<DataType>();
  const [connected, setConnected] = useState(false);
  const timer = useRef<number>(0);

  function resetTimer() {
    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      unsubscribe();
    }, timeout);
  }

  function subscribe(endpointURL: string) {
    const wsURL = endpointURL.replace("http://", "ws://");

    if (!socketRef.current) {
      socketRef.current = new WebSocket(`${wsURL}${path}`);
      socketRef.current.addEventListener("open", () => {
        setConnected(true);
        resetTimer();
      });
      socketRef.current.addEventListener("message", (e) => {
        setData(JSON.parse(e.data));
        resetTimer();
      });
    }
  }

  function unsubscribe() {
    socketRef.current?.close();
    setConnected(false);
  }

  return {
    data,
    subscribe,
    unsubscribe,
    connected
  };
}

export default useWebsocket;