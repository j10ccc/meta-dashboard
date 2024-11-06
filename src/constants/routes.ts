import { parsePath } from "@/utils/path";

export type RouteTitle = "Overview" | "Proxies" | "Connections" | "Logs" | "Settings";

export type Route = {
  title: RouteTitle;
  path: string;
};

const routes: Route[] = [
  {
    title: "Overview",
    path: parsePath("/overview")
  },
  {
    title: "Proxies",
    path: parsePath("/proxies")
  },
  {
    title: "Connections",
    path: parsePath("/connections")
  },
  {
    title: "Logs",
    path: parsePath("/logs")
  },
  {
    title: "Settings",
    path: parsePath("/settings")
  }
];

export default routes;
