export type RouteTitle = "Overview" | "Proxies" | "Connections" | "Logs" | "Settings";

export type Route = {
  title: RouteTitle;
  path: string;
}

const routes: Route[] = [
  {
    title: "Overview",
    path: `${import.meta.env.BASE_URL}/overview`,
  },
  {
    title: "Proxies",
    path: `${import.meta.env.BASE_URL}/proxies`,
  },
  {
    title: "Connections",
    path: `${import.meta.env.BASE_URL}/connections`,
  },
  {
    title: "Logs",
    path: `${import.meta.env.BASE_URL}/logs`,
  },
  {
    title: "Settings",
    path: `${import.meta.env.BASE_URL}/settings`,
  }
];

export default routes;
