import ky from "ky";
import { useMemo } from "react";
import useSWR from "swr";
import type { ProxyGroup } from "@/interfaces/Proxy";
import useEndpoints from "./useEndpoints";

const fetcher = (params: [path: string, domain: string]) => {
  const [path, domain] = params;
  return ky.get(domain + path).json<{proxies: Record<string, Partial<ProxyGroup>>}>();
};

const useProxyGroups = () => {
  const { currentEndpoint } = useEndpoints();
  const { data } = useSWR(
    currentEndpoint ? ["/proxies", currentEndpoint?.url]: null,
    fetcher, {
      revalidateOnReconnect: false,
      revalidateIfStale: false,
      revalidateOnFocus: false
    }
  );

  const groups = useMemo(() => {
    if (!data?.proxies) return [];

    const sortIndex = [...(data.proxies["GLOBAL"].all ?? []), "GLOBAL"];
    const groups = Object.values(data.proxies)
      .filter(proxy => proxy.all?.length) as ProxyGroup[];

    const sortedGroups = groups.sort((a, b) =>
      sortIndex.indexOf(a.name) - sortIndex.indexOf(b.name)
    );

    return sortedGroups;
  }, [data]);

  return {
    groups,
  };
};

export default useProxyGroups;