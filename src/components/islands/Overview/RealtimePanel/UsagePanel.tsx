import { useEffect } from "react";
import useUsage from "@/hooks/useUsage";
import type { Endpoint } from "@/interfaces/Endpoint";

interface IProps {
  endpoint: Endpoint;
}

const UsagePanel = (props: IProps) => {
  const { endpoint } = props;
  const { currentUsage, subscribe, unsubscribe, connected } = useUsage();

  useEffect(() => {
    subscribe(endpoint.url);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="grid grid-cols-2 gap-sm">
      <div className="border-base border py-2 px-4">
        <div className="flex gap-1 items-baseline mb-1">
          <span className="op-60 text-sm">Total Upload</span>
          {!connected && <div title="disconnected" className="i-fluent-mdl2-warning-solid c-red-600 text-xs" />}
        </div>
        <span className="text-2xl"> {currentUsage.uploadTotal.value || "-"} </span>
        <span className="op-50 text-xs">{currentUsage.uploadTotal.unit}</span>
      </div>
      <div className="border-base border py-2 px-4">
        <div className="flex gap-1 items-baseline mb-1">
          <span className="op-60 text-sm">Total Download</span>
          {!connected && <div title="disconnected" className="i-fluent-mdl2-warning-solid c-red-600 text-xs" />}
        </div>
        <span className="text-2xl"> {currentUsage.downloadTotal.value || "-"} </span>
        <span className="op-50 text-xs">{currentUsage.downloadTotal.unit}</span>
      </div>
    </div>
  );
};

export default UsagePanel;