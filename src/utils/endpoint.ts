import { type Endpoint, EndpointSchema } from "@/interfaces/Endpoint";
import { parsePath } from "./path";

export function validEndpoint(value: Endpoint | null) {
  try {
    EndpointSchema.parse(value);
  } catch {
    window.location.replace(parsePath("/launchpad"));
  }
}

export function hideSecret(secret: string) {
  const result = secret.slice(0, 2)
    + "*".repeat(Math.max(secret.length - 4, 0))
    + secret.slice(-2);

  return result;
}