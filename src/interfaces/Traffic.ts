import { z } from "zod";

export enum RateUnitEnum {
  GB = "GB",
  MB = "MB",
  KB = "KB",
  B = "B"
}

export const RateUnitEnumSchema = z.nativeEnum(RateUnitEnum);

export const RawTrafficRateSchema = z.object({
  up: z.number(),
  down: z.number()
});

const ValueWithUnitSchema = z.object({
  value: z.string(),
  unit: RateUnitEnumSchema
});

export const TrafficRateSchema = z.object({
  up: ValueWithUnitSchema,
  down: ValueWithUnitSchema
});

export const RawUsageSchema = z.object({
  uploadTotal: z.number(),
  downloadTotal: z.number()
});

export const UsageSchema = z.object({
  uploadTotal: ValueWithUnitSchema,
  downloadTotal: ValueWithUnitSchema
});

export type RawTrafficRate = z.infer<typeof RawTrafficRateSchema>;
export type TrafficRate = z.infer<typeof TrafficRateSchema>;
export type RawUsage = z.infer<typeof RawUsageSchema>;
export type Usage = z.infer<typeof UsageSchema>;
