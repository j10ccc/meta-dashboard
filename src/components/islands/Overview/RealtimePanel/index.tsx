import useEndpoints from "@/hooks/useEndpoints";
import TrafficPanel from "./TrafficPanel";

const RealtimeInfo = () => {
  const { currentEndpoint } = useEndpoints();

  return (
    <section className="flex justify-center">
      <div className="max-w-screen w-lg">
        <div className="my-2 px-2">
          <span className="op-50 text-xs block">Endpoint</span>
          <div className="flex gap-1 items-center">
            <span className="text-sm">{currentEndpoint?.url}</span>
            <a href={`${import.meta.env.BASE_URL}/launchpad`} className="c-black op-30">
              <div className="i-fluent-mdl2-alert-solid text-xs" />
            </a>
          </div>
        </div>
        {currentEndpoint && <TrafficPanel endpoint={currentEndpoint} />}
      </div>
    </section>
  );
};

export default RealtimeInfo;