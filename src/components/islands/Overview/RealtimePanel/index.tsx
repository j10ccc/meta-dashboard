import useEndpoints from "@/hooks/useEndpoints";
import { parsePath } from "@/utils/path";
import TrafficPanel from "./TrafficPanel";
import UsagePanel from "./UsagePanel";

const RealtimeInfo = () => {
  const { currentEndpoint } = useEndpoints();

  return (
    <section className="flex justify-center">
      <div className="max-w-screen w-lg">
        <div className="my-2 px-2">
          <span className="op-50 block text-xs">Endpoint</span>
          <div className="flex items-center gap-1">
            <span className="text-sm">{currentEndpoint?.url}</span>
            <a href={parsePath("/launchpad")} className="c-black op-30">
              <div className="i-fluent-mdl2-alert-solid text-xs" />
            </a>
          </div>
        </div>
        <div className="gap-sm flex flex-col">
          {currentEndpoint && <TrafficPanel endpoint={currentEndpoint} />}
          {currentEndpoint && <UsagePanel endpoint={currentEndpoint} />}
        </div>
      </div>
    </section>
  );
};

export default RealtimeInfo;
