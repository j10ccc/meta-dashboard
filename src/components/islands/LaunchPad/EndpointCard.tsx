import useEndpoints from "@/hooks/useEndpoints";
import type { Endpoint } from "@/interfaces/Endpoint";
import { hideSecret } from "@/utils/endpoint";

interface EndpointCardProps {
  endpoint: Endpoint;
}

const EndpointCard = (props: EndpointCardProps) => {
  const { endpoint } = props;
  const { setCurrentEndpoint, removeEndpoint, currentEndpoint } = useEndpoints();

  function handleDelete() {
    removeEndpoint(endpoint.id);
  }

  function handleSelect() {
    setCurrentEndpoint(endpoint);
  }

  return (
    <div
      className={[
        "border-1 border-base p-xs flex hover:bg-gray-50 transition",
        currentEndpoint?.id === endpoint.id && "border-color-yellow-400 bg-yellow-50!"
      ].join(" ")}
    >
      <div className="flex-auto">
        <div className="mb-xs">
          <span className="text-xs block op-60">Endpoint URL</span>
          <span className="text-sm">{ endpoint.url }</span>
        </div>
        <div>
          <span className="text-xs block op-60">Secret</span>
          <span className="text-sm">{ hideSecret(endpoint.secret) || "Not set" }</span>
        </div>
      </div>
      <div className="flex flex-col justify-between sm:flex-row sm:justify-unset sm:items-start">
        <div
          className="p-2 rd-1 text-lg sm:text-sm bg-red-50 sm:bg-transparent cursor-pointer"
          onClick={handleDelete}
        >
          <div className="i-fluent-mdl2-delete c-red-700" />
        </div>
        <div
          className="p-2 rd-1 text-lg sm:text-sm bg-green-50 sm:bg-transparent cursor-pointer"
          onClick={handleSelect}
        >
          <div className="i-fluent-mdl2-accept c-green-700" />
        </div>
      </div>
    </div>
  );
};

export default EndpointCard;
