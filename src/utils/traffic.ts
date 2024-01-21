import { RateUnitEnum } from "@/interfaces/Traffic";

export function convertRateUnit(value: number): { value: string, unit: RateUnitEnum } {
  if (value > 1024 * 1024 * 1024) {
    return { value: (value / 1024 / 1024 / 1024).toFixed(1), unit: RateUnitEnum.GB };
  } else if (value > 1024 * 1024) {
    return { value: (value / 1024 / 1024).toFixed(1), unit: RateUnitEnum.MB };
  } else if (value > 1024) {
    return { value: (value / 1024).toFixed(1), unit: RateUnitEnum.KB };
  } else {
    return { value: value.toString(), unit: RateUnitEnum.B };
  }
}