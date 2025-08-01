import { LovelaceCardConfig } from "custom-card-helpers";
import { Action } from "../shared/utils";

export const DEFAULT_BTN_CONFIG: GoogleButtonCardConfig = {
  type: "custom:google-button-card",
};

export enum ControlType {
  GENERIC = "generic",
  THERMOMETER = "thermometer",
  SCENE = "scene",
  MEDIA_PLAYER = "media_player",
}

export enum DomainType {
  BINARY_SENSOR = "binary_sensor",
  SENSOR = "sensor",
  SWITCH = "switch",
}

export enum DeviceType {
  MOTION = "motion",
  DOOR = "door",
  CONNECTIVITY = "connectivity",
  MEASUREMENT = "measurement",
}

function isDeviceType(value: string): value is DeviceType {
  return Object.values(DeviceType).includes(value as DeviceType);
}

export function getValidDeviceClass(
  attributes: Record<string, any>
): DeviceType | undefined {
  const deviceClass = attributes.device_class;
  const stateClass = attributes.state_class;

  if (typeof deviceClass === "string" && isDeviceType(deviceClass)) {
    return deviceClass;
  }

  if (typeof stateClass === "string" && isDeviceType(stateClass)) {
    return stateClass;
  }

  return undefined;
}

export interface GoogleButtonCardConfig extends LovelaceCardConfig {
  name?: string;
  entity?: string;
  attribute?: string;
  use_default_icon?: boolean;
  icon?: string;
  dual_icon?: boolean;
  icon_on?: string;
  icon_off?: string;
  use_default_text?: boolean;
  text_on?: string;
  text_off?: string;
  height?: number;
  control_type?: ControlType;
  fix_temperature?: boolean;
  use_material_color?: boolean;
  use_default_toggle?: boolean;
  tap_action?: Action;
  hold_action?: Action;
}
