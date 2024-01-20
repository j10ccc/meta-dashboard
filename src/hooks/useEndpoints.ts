import { nanoid } from "nanoid";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Endpoint } from "@/interfaces/Endpoint";
import { IDBStorage } from "@/utils/storage";

interface EndpointStore {
  currentEndpoint: Endpoint | null;
  setCurrentEndpoint: (value: Endpoint) => void;
  endpoints: Endpoint[];
  addEndpoint: (value: Omit<Endpoint, "id">) => Endpoint;
  removeEndpoint: (id: string) => void;
}

const useEndpoints = create<EndpointStore>()(
  persist(
    (set) => ({
      currentEndpoint: null,
      setCurrentEndpoint: (value) => set({ currentEndpoint: value }),
      endpoints: [],
      addEndpoint: (value) => {
        const newEndpoint: Endpoint = { ...value, id: nanoid(6) };
        set(({ endpoints }) => {
          const existed = endpoints.find(item => item.url === value.url);
          if (existed) {
            Object.assign(existed, newEndpoint);
          } else {
            endpoints.push(newEndpoint);
          }
          return { endpoints: [...endpoints] };
        });
        return newEndpoint;
      },
      removeEndpoint: id => set(({ currentEndpoint, endpoints }) => {
        return {
          endpoints: endpoints.filter(item => item.id !== id),
          currentEndpoint: currentEndpoint?.id === id ? null : currentEndpoint
        };
      })
    }
    ),
    {
      name: "endpoint",
      storage: createJSONStorage(() => IDBStorage)
    }
  )
);

export default useEndpoints;