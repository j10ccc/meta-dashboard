import { useEffect } from "react";
import useTrafficRate from "@/hooks/useTrafficRate";
import type { Endpoint } from "@/interfaces/Endpoint";

interface IProps {
  endpoint: Endpoint;
}

const TrafficPanel = (props: IProps) => {
  const { endpoint } = props;
  const { currentTraffic, subscribe, unsubscribe, connected } = useTrafficRate(endpoint.url);

  useEffect(() => {
    subscribe();

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="grid grid-cols-2 gap-sm">
      <div className="border-base border py-2 px-4">
        <div className="flex gap-1 items-baseline mb-1">
          <span className="op-60 text-sm">Upload</span>
          {!connected && <div title="disconnected" className="i-fluent-mdl2-warning-solid c-red-600 text-xs" />}
        </div>
        <span className="text-2xl"> {currentTraffic.up.value || "-"} </span>
        <span className="op-50 text-xs">{currentTraffic.up.unit}/s</span>
      </div>
      <div className="border-base border py-2 px-4">
        <div className="flex gap-1 items-baseline mb-1">
          <span className="op-60 text-sm">Download</span>
          {!connected && <div title="disconnected" className="i-fluent-mdl2-warning-solid c-red-600 text-xs" />}
        </div>
        <span className="text-2xl"> {currentTraffic.down.value || "-"} </span>
        <span className="op-50 text-xs">{currentTraffic.down.unit}/s</span>
      </div>
    </div>
  );
};

export default TrafficPanel;