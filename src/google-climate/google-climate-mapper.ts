import { isNullOrEmpty, OnStates } from "../shared/utils";

export function adjustTempAuto(
  fix_temperature: "true" | "false" | "auto",
  temperature: number
) {
  if (isNullOrEmpty(temperature)) return temperature;
  if (fix_temperature == "true") {
    return temperature * 5;
  } else if (fix_temperature == "auto") {
    if (temperature < 7) {
      return temperature * 5;
    }
  }
  return temperature;
}

export function adjustNewTempAuto(
  fix_temperature: "true" | "false" | "auto",
  temperature: number
) {
  if (isNullOrEmpty(temperature)) return temperature;
  if (fix_temperature == "true") {
    return temperature / 5;
  } else if (fix_temperature == "auto") {
    if (temperature < 7) {
      return temperature / 5;
    }
  }
  return temperature;
}

export function isAirConditioning(states: string[]) {
  return (
    states &&
    !states.includes(OnStates.HEAT) &&
    !states.includes(OnStates.HEAT_COOL)
  );
}
