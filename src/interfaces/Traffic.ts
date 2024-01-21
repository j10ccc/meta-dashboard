import { z } from "zod";

export enum RateUnitEnum {
  MBps = "MB/s",
  KBps = "KB/s",
  Bps = "B/s"
}

export const RateUnitEnumSchema = z.nativeEnum(RateUnitEnum);

export const RawTrafficRateSchema = z.object({
  up: z.number(),
  down: z.number()
});

export const TrafficRateSchema = z.object({
  up: z.object({
    value: z.string(),
    unit: RateUnitEnumSchema
  }),
  down: z.object({
    value: z.string(),
    unit: RateUnitEnumSchema
  }),
});

export interface RawTrafficRate extends z.infer<typeof RawTrafficRateSchema> { }
export interface TrafficRate extends z.infer<typeof TrafficRateSchema> { }