import useProxyNodes from "@/hooks/useProxyNodes";
import type { ProxyGroup } from "@/interfaces/Proxy";

interface IProps {
  group: ProxyGroup | undefined;
  setGroup: (value: ProxyGroup) => void;
}

const GroupDetail = (props: IProps) => {
  const { group } = props;
  const { currentNode, nodes, selectNode } = useProxyNodes(group);

  function handleSelect(e: any) {
    const name = e.target.dataset["name"];
    selectNode(name);
  }

  return (
    <div className="flex flex-col flex-auto ml-sm">
      <div className="my-4">
        <span className="op-40 text-sm">Proxy Nodes</span>
      </div>
      <li className="grid text-sm gap-xs sm:grid-cols-2 of-y-scroll pr-sm pb-xs">
        {nodes.map(node => (
          <ul
            data-name={node}
            className={[
              "m-0 rd-1 py-2 px-sm bg-gray-50 cursor-pointer box-content",
              currentNode === node ? "font-bold c-gray-800 bg-gray-200!" : ""
            ].join(" ")}
            key={node}
            onClick={handleSelect}
          >
            <span className="break-all pointer-events-none">{node}</span>
          </ul>
        ))}
      </li>
    </div>
  );
};

export default GroupDetail;
