import ky from "ky";
import { useMemo } from "react";
import useSWR from "swr";
import type { ProxyGroup } from "@/interfaces/Proxy";
import useEndpoints from "./useEndpoints";

const fetcher = (url: string) => {
  return ky(url).json<{providers: Record<string, ProxyGroup>}>();
};

const useProxyGroups = () => {
  const { currentEndpoint } = useEndpoints();
  const { data } = useSWR(
    currentEndpoint && `${currentEndpoint.url}/providers/proxies`,
    fetcher, {
      // revalidateOnMount: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
      revalidateOnFocus: false
    }
  );

  const groups = useMemo(() => {
    if (data?.providers) {
      return Object.values(data.providers);
    } else {
      return [];
    }
  }, [data]);

  return {
    groups,
  };
};

export default useProxyGroups;