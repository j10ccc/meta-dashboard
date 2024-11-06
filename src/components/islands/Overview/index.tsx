import { useEffect } from "react";
import useEndpoints from "@/hooks/useEndpoints";
import { validEndpoint } from "@/utils/endpoint";
import RealtimePanel from "./RealtimePanel";

const Overview = () => {
  useEffect(() => {
    useEndpoints.persist.onFinishHydration(({ currentEndpoint }) => {
      validEndpoint(currentEndpoint);
    });
  }, []);

  return (
    <main className="px-sm">
      <RealtimePanel />
    </main>
  );
};

export default Overview;
