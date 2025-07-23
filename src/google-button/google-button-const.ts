import { LovelaceCardConfig } from "custom-card-helpers";

export const DEFAULT_BTN_CONFIG: GoogleButtonCardConfig = {
  type: "custom:google-button-card",
  tap_action: {
    action: "toggle",
    haptic: "light",
  },
  hold_action: {
    action: "more-info",
  },
};

export enum ControlType {
  GENERIC = "generic",
  THERMOMETER = "thermometer",
  SCENE = "scene",
  MEDIA_PLAYER = "media_player",
  OTHER = "other",
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
  height?: number;
  control_type?: ControlType;
  fix_temperature?: boolean;
  use_material_color?: boolean;
}
