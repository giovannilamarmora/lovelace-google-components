import { localize } from "../localize/localize";
import { ControlType, OnlineStates } from "./google-button-const";

export function getIcon(stateObj: any, config: any): string {
  const domain = stateObj.entity_id.split(".")[0];
  const state = stateObj.state;
  const controlType: string = config.control_type ?? "generic";

  const useDefault = config.use_default_icon ?? true;

  if (!useDefault) {
    // Se non si usa l'icona di default, si segue la configurazione personalizzata
    if (config.dual_icon) {
      if (
        state === "on" ||
        state === "auto" ||
        state === "heat" ||
        state === "cool"
      ) {
        return config.icon_on || `mdi:${domain}`;
      } else {
        return config.icon_off || `mdi:${domain}`;
      }
    } else {
      return config.icon || `mdi:${domain}`;
    }
  }

  // Se use_default_icon è true, prosegui con la logica predefinita

  if (stateObj.attributes.icon?.trim()) {
    return stateObj.attributes.icon;
  }

  switch (controlType) {
    case ControlType.THERMOMETER: {
      switch (state) {
        case "auto":
        case "heat_cool":
          return "mdi:thermostat-auto";
        case "heat":
          return "mdi:fire";
        case "cool":
          return "mdi:snowflake";
        case "off":
          return "mdi:thermometer-off";
        default:
          return "mdi:thermometer";
      }
    }
    case ControlType.SCENE:
      return "mdi:creation-outline";
    case ControlType.MEDIA_PLAYER:
      switch (state) {
        case "idle":
          return "m3rf:tv-gen";
        default:
          return "m3r:tv-gen";
      }
  }

  return `mdi:${domain}`;
}

export function mapStateDisplay(
  stateObj: any,
  control_type: string,
  isOffline: boolean,
  fix_temperature: boolean = false
) {
  let text = "";
  if (control_type === "thermometer" && !isOffline)
    text =
      " • " +
      (fix_temperature
        ? stateObj.attributes.current_temperature * 5
        : stateObj.attributes.current_temperature) +
      "°";
  return getStateDisplay(stateObj.state, text);
}

export function getStateDisplay(state: string, text: string = ""): string {
  if (!Object.values(OnlineStates).includes(state as OnlineStates)) {
    return localize("common.offline");
  }

  const stateMap: Record<string, string> = {
    [OnlineStates.ON]: localize("common.on"),
    [OnlineStates.OFF]: localize("common.off"),
    [OnlineStates.AUTO]: localize("common.auto"),
    [OnlineStates.HEAT]: localize("common.heat"),
    [OnlineStates.COOL]: localize("common.cool"),
    [OnlineStates.HEAT_COOL]: localize("common.auto"),
  };

  const finalState = stateMap[state] || state;

  return text != "" ? finalState + text : finalState;
}

export function isOfflineState(
  state: string,
  control_type: string = ""
): boolean {
  if (control_type == "scene" && state == "unknown") {
    return false;
  }
  return !Object.values(OnlineStates).includes(state as OnlineStates);
}
