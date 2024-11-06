import { RateUnitEnum } from "@/interfaces/Traffic";

export function convertRateUnit(value: number): { value: string, unit: RateUnitEnum } {
  if (value < 1000) {
    return { value: value.toString(), unit: RateUnitEnum.B };
  } else if (value < 1000 * 1000) {
    return { value: (value / 1024).toFixed(1), unit: RateUnitEnum.KB };
  } else if (value < 1000 * 1000 * 1000) {
    return { value: (value / 1024 / 1024).toFixed(1), unit: RateUnitEnum.MB };
  } else {
    return { value: (value / 1024 / 1024 / 1024).toFixed(1), unit: RateUnitEnum.GB };
  }
}
