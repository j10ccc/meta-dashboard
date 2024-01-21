import { useEffect } from "react";
import useTrafficRate from "@/hooks/useTrafficRate";
import type { Endpoint } from "@/interfaces/Endpoint";

interface IProps {
  endpoint: Endpoint;
}

const TrafficPanel = (props: IProps) => {
  const { endpoint } = props;

  const { currentTraffic, subscribe: subTraffic, unsubscribe: unsubTraffic } = useTrafficRate();

  useEffect(() => {
    subTraffic(endpoint.url);

    return () => {
      unsubTraffic();
    };
  }, []);

  return (
    <div className="grid grid-cols-2 gap-sm">
      <div className="border-base border py-2 px-4">
        <span className="op-60 text-sm mb-1 block">Upload</span>
        <span className="text-2xl"> {currentTraffic?.up.value || "-"} </span>
        <span className="op-50 text-xs">{currentTraffic?.up.unit}</span>
      </div>
      <div className="border-base border py-2 px-4">
        <span className="op-60 text-sm mb-1 block">Download</span>
        <span className="text-2xl"> {currentTraffic?.down.value || "-"} </span>
        <span className="op-50 text-xs">{currentTraffic?.down.unit}</span>
      </div>
    </div>
  );
};

export default TrafficPanel;