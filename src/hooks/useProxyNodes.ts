import { useEffect, useMemo, useState } from "react";
import { useRequestContext } from "@/components/contexts/RequestContext";
import type { ProxyGroup } from "@/interfaces/Proxy";

function useProxyNodes(group: ProxyGroup | undefined) {
  const [current, setCurrent] = useState<string | undefined>(group?.now);
  const { request } = useRequestContext();
  const nodes = useMemo(() => {
    return group?.all || [];
  }, [group]);

  useEffect(() => {
    if (group) setCurrent(group.now);
  }, [group]);

  async function selectNode(name: string) {
    if (!request || !group?.name) return;
    await request.put(`proxies/${group.name}`, {
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
