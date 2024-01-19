import { z } from "zod";

export const EndpointSchema = z.object({
  id: z.string(),
  url: z.string().min(1),
  secret: z.string(),
});

export interface Endpoint extends z.infer<typeof EndpointSchema> {}