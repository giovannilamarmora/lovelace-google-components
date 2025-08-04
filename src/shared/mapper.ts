import {
  ControlType,
  DeviceType,
  DomainType,
  getValidDeviceClass,
} from "../google-button/google-button-const";
import { localize } from "../localize/localize";
import { GoogleDevice } from "./google_model";
import {
  getOrDefault,
  isDeviceOn,
  isDeviceOnline,
  OnlineStates,
} from "./utils";

export function getIcon(stateObj: any, config: any, hass: any): string {
  const domain = stateObj.entity_id.split(".")[0];
  const state = stateObj.state;
  const controlType: string = config.control_type ?? "generic";

  const useDefault = config.use_default_icon ?? true;
  const idDeviceTurnOn = isDeviceOn(state);

  if (!useDefault) {
    // Se non si usa l'icona di default, si segue la configurazione personalizzata
    if (config.dual_icon) {
      if (idDeviceTurnOn) {
        return config.icon_on || `mdi:${domain}`;
      } else {
        return config.icon_off || `mdi:${domain}`;
      }
    } else {
      return config.icon || `mdi:${domain}`;
    }
  }

  // Se use_default_icon è true, prosegui con la logica predefinita

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
        case "unavailable":
          return "m3s:thermometer";
        //return "mdi:thermometer-off";
        default:
          return "m3of:thermometer";
        //return "mdi:thermometer";
      }
    }
    case ControlType.SCENE:
      return "mdi:creation-outline";
    case ControlType.MEDIA_PLAYER:
      const device_id = hass.entities[config.entity!].device_id;
      const google_device: GoogleDevice = hass.devices[device_id].model || null;
      if (google_device) {
        switch (google_device) {
          case GoogleDevice.NEST_MINI:
            return idDeviceTurnOn
              ? //return state == OnStates.IDLE || state == OnStates.PLAYING
                "m3of:nest-mini"
              : "m3o:nest-mini";
          case GoogleDevice.GOOGLE_HOME:
            return idDeviceTurnOn
              ? //return state == OnStates.IDLE || state == OnStates.PLAYING
                "m3of:home-speaker"
              : "m3o:home-speaker";
          case GoogleDevice.NEST_HUB:
            return idDeviceTurnOn
              ? //return state == OnStates.IDLE || state == OnStates.PLAYING
                "m3of:nest-display"
              : "m3o:nest-display";
          case GoogleDevice.GOOGLE_CAST_GROUP:
            return idDeviceTurnOn
              ? //return state == OnStates.IDLE || state == OnStates.PLAYING
                "m3rf:speaker-group"
              : "m3r:speaker-group";
          default:
            return idDeviceTurnOn ? "m3rf:tv-gen" : "m3r:tv-gen";
        }
      }
      break;
    case ControlType.GENERIC: {
      const deviceOn = isDeviceOn(state);
      if (domain == DomainType.BINARY_SENSOR || domain == DomainType.SENSOR) {
        const device_class = getValidDeviceClass(stateObj.attributes);
        switch (device_class) {
          case DeviceType.CONNECTIVITY:
            if (deviceOn) return "m3of:nest-wifi-router";
            else return "m3o:nest-wifi-router";
          case DeviceType.MOTION:
            if (deviceOn) return "m3rf:sensors-krx";
            else return "m3r:sensors-krx";
          case DeviceType.MEASUREMENT:
            return "mdi:scale-bathroom";
          case DeviceType.DOOR:
            if (deviceOn) return "m3rf:sensor-door";
            else return "m3r:sensor-door";
        }
      }
      if (domain == DomainType.SWITCH) {
        if (deviceOn) return "m3rf:switch";
        else return "m3r:switch";
      }
    }
  }

  if (stateObj.attributes.icon?.trim()) {
    return stateObj.attributes.icon;
  }

  const entity = hass.entities[config.entity!];

  if (entity && entity.icon) return entity.icon;
  return `mdi:${domain}`;
}

export function mapStateDisplay(
  stateObj: any,
  control_type: string,
  isOffline: boolean,
  fix_temperature: boolean = false,
  is_presence_sensor: boolean = false
) {
  let text = "";
  if (control_type === ControlType.THERMOMETER && !isOffline)
    text = stateObj.attributes.current_temperature
      ? " • " +
        (fix_temperature
          ? stateObj.attributes.current_temperature * 5
          : stateObj.attributes.current_temperature) +
        "°"
      : "";
  if (control_type === ControlType.MEDIA_PLAYER && !isOffline) {
    if (!isDeviceOn(stateObj.state)) return "";
    const app_name = getOrDefault(stateObj.attributes.app_name, "");
    //const title = getOrDefault(stateObj.attributes.media_title, "");
    // text = app_name ? " • " + app_name : "" + title ? " • " + title : "";
    text = app_name ? " • " + app_name : "";
  }
  return getStateDisplay(stateObj.state, text, is_presence_sensor);
}

export function getStateDisplay(
  state: string,
  text: string = "",
  is_presence_sensor: boolean = false
): string {
  if (!isDeviceOnline(state)) {
    return localize("common.offline");
  }

  const stateMap: Record<string, string> = {
    [OnlineStates.ON]: is_presence_sensor
      ? localize("common.presence")
      : localize("common.on"),
    [OnlineStates.OFF]: is_presence_sensor
      ? localize("common.off_presence")
      : localize("common.off"),
    [OnlineStates.AUTO]: localize("common.auto"),
    [OnlineStates.HEAT]: localize("common.heat"),
    [OnlineStates.COOL]: localize("common.cool"),
    [OnlineStates.HEAT_COOL]: localize("common.auto"),
    [OnlineStates.IDLE]: localize("common.idle"),
    [OnlineStates.PAUSE]: localize("common.idle"),
    [OnlineStates.PLAYING]: localize("common.playing"),
  };

  const finalState = stateMap[state] || state;

  return text != "" ? finalState + text : finalState;
}

export function getName(config: any, hass: any) {
  if (config.name) return config.name;
  const stateObj = hass.states[config.entity!];
  if (stateObj && stateObj.attributes.friendly_name)
    return stateObj.attributes.friendly_name;
  if (hass && hass.entities && hass.entities[config.entity]) {
    const device_id = hass.entities[config.entity!].device_id;
    const device = hass.devices[device_id];
    return device.name;
  }
}
