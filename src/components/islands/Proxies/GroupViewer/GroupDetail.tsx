import type { ProxySelector } from "@/interfaces/Proxy";

interface IProps {
  nodes: ProxySelector[];
}

const GroupDetail = (props: IProps) => {
  const { nodes } = props;

  function handleSelect(e: any) {
    const name = e.target.dataset["name"];
    console.log(e, name);
  }

  return (
    <div className="flex flex-col flex-auto ml-sm">
      <div className="my-4">
        <span className="op-40 text-sm">Proxy Nodes</span>
      </div>
      <li className="grid text-sm gap-xs sm:grid-cols-2 of-y-scroll pr-sm pb-xs">
        {nodes.map(node => (
          <ul
            data-name={node.name}
            className="m-0 rd-1 py-2 px-sm bg-gray-50 cursor-pointer"
            key={node.name}
            onClick={handleSelect}
          >
            <span className="break-all pointer-events-none"> {node.name} </span>
          </ul>
        ))}
      </li>
    </div>
  );
};

export default GroupDetail;