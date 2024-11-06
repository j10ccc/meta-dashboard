import { useRef, useState } from "react";

function useWebsocket<DataType>(path: string, timeout = 5000) {
  const socketRef = useRef<WebSocket>();
  const [data, setData] = useState<DataType>();
  const [connected, setConnected] = useState(false);
  const urlCache = useRef<string>();
  const timer = useRef<number>(0); // Record whether socket is disconnected

  function resetTimer() {
    clearInterval(timer.current);

    timer.current = setInterval(() => {
      reconnect();
    }, timeout);
  }

  function subscribe(endpointURL: string) {
    urlCache.current = endpointURL;
    const wsURL = endpointURL.replace("http://", "ws://");

    if (!socketRef.current) {
      socketRef.current = new WebSocket(`${wsURL}${path}`);
      socketRef.current.addEventListener("open", () => {
        setConnected(true);
        resetTimer();
      });
      socketRef.current.addEventListener("message", (e) => {
        setConnected(true);
        setData(JSON.parse(e.data));
        resetTimer();
      });
    }
  }

  function reconnect() {
    setConnected(false);
    if (!urlCache.current) return;
    subscribe(urlCache.current);
  }

  function unsubscribe() {
    clearInterval(timer.current);
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
