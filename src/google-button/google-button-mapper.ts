import { localize } from "../localize/localize";
import { GoogleDevice } from "../shared/google_model";
import {
  getOrDefault,
  isDeviceOn,
  isDeviceOnline,
  OnlineStates,
  OnStates,
} from "../shared/utils";
import { ControlType } from "./google-button-const";

export function getIcon(stateObj: any, config: any, hass: any): string {
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
      const device_id = hass.entities[config.entity!].device_id;
      const google_device: GoogleDevice = hass.devices[device_id].model || null;
      console.log("DEVICE", device_id, google_device);
      if (google_device) {
        switch (google_device) {
          case GoogleDevice.NEST_MINI:
            return state == OnStates.IDLE || state == OnStates.PLAYING
              ? "m3of:nest-mini"
              : "m3o:nest-mini";
          case GoogleDevice.GOOGLE_HOME:
            return state == OnStates.IDLE || state == OnStates.PLAYING
              ? "m3of:home-speaker"
              : "m3o:home-speaker";
          case GoogleDevice.NEST_HUB:
            return state == OnStates.IDLE || state == OnStates.PLAYING
              ? "m3of:nest-display"
              : "m3o:nest-display";
          case GoogleDevice.GOOGLE_CAST_GROUP:
            return state == OnStates.IDLE || state == OnStates.PLAYING
              ? "m3rf:speaker-group"
              : "m3r:speaker-group";
        }
      }
      return state == OnStates.IDLE || state == OnStates.PLAYING
        ? "m3rf:tv-gen"
        : "m3r:tv-gen";
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
  if (control_type === ControlType.THERMOMETER && !isOffline)
    text =
      " • " +
      (fix_temperature
        ? stateObj.attributes.current_temperature * 5
        : stateObj.attributes.current_temperature) +
      "°";
  if (control_type === ControlType.MEDIA_PLAYER && !isOffline) {
    if (!isDeviceOn(stateObj.state)) return "";
  }
  const app_name = getOrDefault(stateObj.attributes.app_name, "");
  //const title = getOrDefault(stateObj.attributes.media_title, "");
  // text = app_name ? " • " + app_name : "" + title ? " • " + title : "";
  text = app_name ? " • " + app_name : "";
  return getStateDisplay(stateObj.state, text);
}

export function getStateDisplay(state: string, text: string = ""): string {
  if (!isDeviceOnline(state)) {
    return localize("common.offline");
  }

  const stateMap: Record<string, string> = {
    [OnlineStates.ON]: localize("common.on"),
    [OnlineStates.OFF]: localize("common.off"),
    [OnlineStates.AUTO]: localize("common.auto"),
    [OnlineStates.HEAT]: localize("common.heat"),
    [OnlineStates.COOL]: localize("common.cool"),
    [OnlineStates.HEAT_COOL]: localize("common.auto"),
    [OnlineStates.IDLE]: localize("common.idle"),
    [OnlineStates.PLAYING]: localize("common.playing"),
  };

  const finalState = stateMap[state] || state;

  return text != "" ? finalState + text : finalState;
}
