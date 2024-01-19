import useEndpoints from "@/hooks/useEndpoints";
import EndpointCard from "./EndpointCard";
import EndpointCreateForm from "./EndpointCreateForm";

const LaunchPad = () => {
  const { endpoints } = useEndpoints();

  return (
    <main className="px-sm">
      <section className="flex justify-center mb-6">
        <div className="max-w-screen w-lg">
          <EndpointCreateForm />
        </div>
      </section>
      <section id="endpoint-list" className="flex justify-center">
        <div className="max-w-screen w-lg grid grid-cols-1 sm:grid-cols-2 gap-xs">
          { endpoints.map(endpoint => (
            <EndpointCard key={endpoint.id} endpoint={endpoint} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default LaunchPad;