import { useMemo } from "react";
import useSWR from "swr";
import { useRequestContext } from "@/components/contexts/RequestContext";
import type { ProxyGroup } from "@/interfaces/Proxy";

const useProxyGroups = () => {
  const { request } = useRequestContext();

  const { data } = useSWR(
    request ? "proxies" : null,
    (path) => request!(path).json<{ proxies: Record<string, Partial<ProxyGroup>> }>(),
    {
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
    groups
  };
};

export default useProxyGroups;
