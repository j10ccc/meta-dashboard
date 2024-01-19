import { useEffect } from "react";
import useEndpoints from "@/hooks/useEndpoints";
import { validEndpoint } from "@/utils/endpoint";

const Overview = () => {
  const { currentEndpoint } = useEndpoints();

  useEffect(() => {
    useEndpoints.persist.onFinishHydration(({ currentEndpoint }) => {
      validEndpoint(currentEndpoint);
    });
  }, []);

  return (
    <div>
      { currentEndpoint?.url }
    </div>
  );
};

export default Overview;