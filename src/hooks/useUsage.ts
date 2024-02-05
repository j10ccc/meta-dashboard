import { useMemo } from "react";
import type { RawUsage, Usage } from "@/interfaces/Traffic";
import { convertRateUnit } from "@/utils/traffic";
import useWebsocket from "./useWebsocket";

function useUsage() {
  const { data, connected, subscribe, unsubscribe } = useWebsocket<RawUsage>("/connections");
  console.log("");
  const usage = useMemo<Usage>(() => {
    return {
      uploadTotal: convertRateUnit(data?.uploadTotal || 0),
      downloadTotal: convertRateUnit(data?.downloadTotal || 0)
    };
  }, [data]);

  return {
    connected,
    currentUsage: usage,
    subscribe,
    unsubscribe
  };
}

export default useUsage;