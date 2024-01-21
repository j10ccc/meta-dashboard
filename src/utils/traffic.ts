import { RateUnitEnum } from "@/interfaces/Traffic";

export function convertRateUnit(value: number): { value: string, unit: RateUnitEnum } {
  if (value > 1024 * 1024) {
    return { value: (value / 1024 / 1024).toFixed(1), unit: RateUnitEnum.MBps };
  } else if (value > 1024) {
    return { value: (value / 1024).toFixed(1), unit: RateUnitEnum.KBps };
  } else {
    return { value: value.toString(), unit: RateUnitEnum.Bps };
  }
}