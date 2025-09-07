import { ControlType } from "../google-button/google-button-const";

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
  PAUSED = "paused",
}

export enum OffStates {
  OFF = "off",
}

export const OnlineStates = {
  ...OnStates,
  ...OffStates,
} as const;

export function isDeviceOn(state: string) {
  const stateNum = Number.parseInt(state);

  if (!isNaN(stateNum) && stateNum !== 0) {
    // Se è un numero diverso da 0, non è offline
    return false;
  }
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

  if (
    (control_type == ControlType.SCENE && state == "unknown") ||
    control_type == ControlType.STATE
  ) {
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

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  // Verifica se è una data valida
  if (isNaN(date.getTime())) {
    return dateString; // fallback: puoi mettere anche "" o un testo tipo "Data non valida"
  }

  const formatted = new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);

  // Capitalizza il mese (Intl lo mette in minuscolo, es. "set")
  return formatted.replace(
    /([a-zàèéìòù]+)/,
    (m) => m.charAt(0).toUpperCase() + m.slice(1)
  );
}

export function isNullOrEmpty(value: any): boolean {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === "string") {
    return value.trim().length === 0;
  }

  if (typeof value === "number") {
    return value === 0 || Number.isNaN(value);
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }

  return false;
}
