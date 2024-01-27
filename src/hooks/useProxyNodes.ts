import ky from "ky";
import { useEffect, useMemo, useState } from "react";
import type { ProxyGroup } from "@/interfaces/Proxy";
import useEndpoints from "./useEndpoints";

function useProxyNodes(group: ProxyGroup | undefined) {
  const [current, setCurrent] = useState<string | undefined>(group?.now);
  const { currentEndpoint } = useEndpoints();
  const nodes = useMemo(() => {
    return group?.all || [];
  }, [group]);

  useEffect(() => {
    group && setCurrent(group.now);
  }, [group]);

  async function selectNode(name: string) {
    if (!currentEndpoint?.url || !group?.name) return;
    await ky.put(currentEndpoint.url + `/proxies/${group.name}`, {
      body: JSON.stringify({ name })
    }).json<null>();
    setCurrent(name);
  }

  return {
    currentNode: current,
    selectNode,
    nodes
  };
}

export default useProxyNodes;