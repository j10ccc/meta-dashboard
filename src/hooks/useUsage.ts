import { useMemo } from "react";
import type { RawUsage, Usage } from "@/interfaces/Traffic";
import { convertRateUnit } from "@/utils/traffic";
import useWebsocket from "./useWebsocket";

function useUsage(endpointURL: string) {
  const { data, connected, subscribe: _subscribe, unsubscribe } = useWebsocket<RawUsage>("/connections");
  const usage = useMemo<Usage>(() => {
    return {
      uploadTotal: convertRateUnit(data?.uploadTotal || 0),
      downloadTotal: convertRateUnit(data?.downloadTotal || 0)
    };
  }, [data]);

  function subscribe() {
    _subscribe(endpointURL);
  }

  return {
    connected,
    currentUsage: usage,
    subscribe,
    unsubscribe
  };
}

export default useUsage;