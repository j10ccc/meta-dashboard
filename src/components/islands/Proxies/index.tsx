import RequestContext from "@/components/contexts/RequestContext";
import GroupViewer from "./GroupViewer";

const Proxies = () => {
  return (
    <RequestContext>
      <main className="h-[calc(100vh-4rem-1px)] of-hidden">
        <GroupViewer />
      </main>
    </RequestContext>
  );
};

export default Proxies;
