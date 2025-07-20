import { GoogleButtonCardConfig } from "../google-slider/types";

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

export enum OnlineStates {
  ON = "on",
  OFF = "off",
  AUTO = "auto",
  HEAT = "heat",
  COOL = "cool",
  HEAT_COOL = "heat_cool",
  //UNKNOWN = "unknown",
}
