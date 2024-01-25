import { useEffect, useState } from "react";
import useProxyGroups from "@/hooks/useProxyGroups";
import type { ProxyGroup } from "@/interfaces/Proxy";
import GroupDetail from "./GroupDetail";
import GroupList from "./GroupList";

const GroupViewer = () => {
  const { groups } = useProxyGroups();
  const [currentGroup, setCurrentGroup] = useState<ProxyGroup>();

  useEffect(() => {
    setCurrentGroup(groups[0]);
  }, [groups]);

  return (
    <section className="flex justify-center">
      <div className="max-w-screen w-lg flex">
        <GroupList group={currentGroup} setGroup={setCurrentGroup} />
        <GroupDetail nodes={currentGroup?.proxies || []} />
      </div>
    </section>
  );
};

export default GroupViewer;