import type { KyInstance } from "ky";
import ky from "ky";
import { type ReactNode, createContext, useContext, useMemo } from "react";
import useEndpoints from "@/hooks/useEndpoints";

const RequestContextImpl = createContext<{
  request: KyInstance | null;
}>({
  request: null
});

export const useRequestContext = () => {
  const { request } = useContext(RequestContextImpl);

  return { request };
};

const RequestContext = ({ children }: { children: ReactNode }) => {
  const { currentEndpoint } = useEndpoints();

  const request = useMemo(() => {
    if (currentEndpoint) {
      return ky.create({
        prefixUrl: currentEndpoint.url,
        headers: {
          Authorization: `Bearer ${currentEndpoint.secret}`
        }
      });
    }
    return null;
  }, [currentEndpoint]);

  return (
    <RequestContextImpl.Provider value={{ request }}>
      { children }
    </RequestContextImpl.Provider>
  );
};

export default RequestContext;