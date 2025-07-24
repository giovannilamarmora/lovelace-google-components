export enum OnStates {
  // Lights
  ON = "on",
  // Climate
  AUTO = "auto",
  HEAT = "heat",
  COOL = "cool",
  HEAT_COOL = "heat_cool",
  FAN_ONLY = "fan_only",
  FAN = "fan",
  DRY = "dry",
  ECO = "eco",
  // Media Player
  IDLE = "idle",
  PLAYING = "playing",
  PAUSE = "pause",
}

export enum OffStates {
  OFF = "off",
}

export const OnlineStates = {
  ...OnStates,
  ...OffStates,
} as const;

export function isDeviceOn(state: string) {
  return Object.values(OnStates).includes(state as OnStates);
}

export function isDeviceOnline(state: string) {
  return (
    Object.values(OnStates).includes(state as OnStates) ||
    Object.values(OffStates).includes(state as OffStates)
  );
}

export function isOfflineState(
  state: string,
  control_type: string = ""
): boolean {
  const stateNum = Number.parseInt(state);

  if (!isNaN(stateNum) && stateNum !== 0) {
    // Se è un numero diverso da 0, non è offline
    return false;
  }

  if (control_type == "scene" && state == "unknown") {
    return false;
  }

  return !isDeviceOnline(state);
}

export enum Action {
  CLICK = "toggle",
  HOLD = "info",
}

export function getOrDefault<T>(value: T | undefined | null, defValue: T): T {
  return value !== undefined && value !== null ? value : defValue;
}
