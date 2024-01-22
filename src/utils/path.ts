type ValidPath = `/${string}`

export function parsePath(path: ValidPath) {
  const base = import.meta.env.BASE_URL;
  let target = base + path;
  target = target.replace(/^\/+/, "/");

  return target;
}
