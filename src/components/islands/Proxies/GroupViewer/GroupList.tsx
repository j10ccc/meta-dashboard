import useProxyGroups from "@/hooks/useProxyGroups";
import type { ProxyGroup } from "@/interfaces/Proxy";

interface IProps {
  group: ProxyGroup | undefined;
  setGroup: (value: ProxyGroup) => void;
}

const GroupList = (props: IProps) => {
  const { groups } = useProxyGroups();
  const { group: currentGroup, setGroup } = props;

  const handleSelect = (value: ProxyGroup) => {
    setGroup(value);
  };

  return (
    <div className="w-32 flex flex-col shrink-0">
      <div className="my-4 px-sm">
        <span className="op-60 text-sm">Proxy Groups</span>
      </div>
      <li className="block text-sm pl-sm of-scroll">
        { groups.map(group => (
          <ul
            className={[
              "my0 py-2 px-2 border-base border-solid cursor-pointer",
              currentGroup === group ? "b-y" : "b-r"
            ].join(" ")}
            key={group.name}
            onClick={() => handleSelect(group)}
          >
            <span
              className={[
                "pointer-events-none",
                currentGroup === group ? "c-black" : "op-30"
              ].join(" ")}
            >
              { group.name }
            </span>
          </ul>
        ))}
      </li>
    </div>
  );
};

export default GroupList;
