import { localize } from "../localize/localize";
import { OnlineStates } from "./google-button-const";

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

  if (controlType === "thermometer") {
    switch (state) {
      case "auto":
        return "mdi:thermostat-auto";
      case "heat":
        return "mdi:fire";
      case "cool":
        return "mdi:snowflake";
      default:
        return "mdi:thermometer";
    }
  }

  return `mdi:${domain}`;
}

export function mapStateDisplay(
  stateObj: any,
  control_type: string,
  isOffline: boolean
) {
  let text = "";
  if (control_type === "thermometer" && !isOffline)
    text = " • " + stateObj.attributes.current_temperature + "°";
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
  };

  const finalState = stateMap[state] || state;

  return text != "" ? finalState + text : finalState;
}

export function isOfflineState(state: string): boolean {
  return !Object.values(OnlineStates).includes(state as OnlineStates);
}
