import type { ProxyGroup } from "@/interfaces/Proxy";

interface IProps {
  nodes: string[];
  currentNode: string | undefined;
  setGroup: (value: ProxyGroup) => void;
}

const GroupDetail = (props: IProps) => {
  const { nodes, currentNode } = props;

  function handleSelect(e: any) {
    const name = e.target.dataset["name"];
    console.log(name);
  }

  return (
    <div className="flex flex-col flex-auto ml-sm">
      <div className="my-4">
        <span className="op-40 text-sm">Proxy Nodes</span>
      </div>
      <li className="grid text-sm gap-xs sm:grid-cols-2 of-y-scroll pr-sm pb-xs">
        {nodes.map(name => (
          <ul
            data-name={name}
            className={[
              "m-0 rd-1 py-2 px-sm bg-gray-50 cursor-pointer",
              currentNode === name ? "font-bold c-gray-800 border-base b-2" : ""
            ].join(" ")}
            key={name}
            onClick={handleSelect}
          >
            <span className="break-all pointer-events-none">{name}</span>
          </ul>
        ))}
      </li>
    </div>
  );
};

export default GroupDetail;