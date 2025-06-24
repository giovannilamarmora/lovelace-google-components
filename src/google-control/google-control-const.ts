import { LovelaceCardConfig } from "custom-card-helpers";

export interface GoogleControlCardConfig extends LovelaceCardConfig {
  name?: string;
  entity?: string;
  icon?: string;
  // ...altre proprietà
}

export const DEFAULT_CONFIG: GoogleControlCardConfig = {
  type: "custom:google-control-card",
};

export function googleControlTemplate(name: string, icon: string) {
  return `type: custom:button-card
name: ${name}
icon: ${icon}
tap_action:
  action: url
  url_path: |
    [[[
      const ua = navigator.userAgent || "";
      if (ua.includes("Android")) {
        return "app://com.google.android.apps.chromecast.app";
      } else if (ua.includes("iPhone") || ua.includes("iPad")) {
        return "https://apps.apple.com/app/google-home/id680819774";
      } else {
        return "https://home.google.com/";
      }
    ]]]
styles:
  grid:
    - grid-template-columns: 2fr 1fr 1fr
    - grid-template-rows: 2fr 0.1fr 2fr
    - grid-template-areas: |
        "i . ."
        ". . ."
        "n n n"
  card:
    - height: 140px
    - width: 140px
    - border-radius: 30px
    - margin-bottom: 1px
    - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05), 0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
    - background-color: |
        [[[
          return hass.themes.darkMode ? '#1f2022' : '#eeedf2';
        ]]]
  name:
    - font-size: 1rem
    - font-weight: bold
    - justify-self: start
    - align-self: center
    - margin-left: 20px
    - width: 100px
    - text-align: left
    - white-space: normal
    - overflow-wrap: break-word
    - word-break: break-word
    - color: |
        [[[
          return hass.themes.darkMode ? '#e3e3e5' : '#1b1b1d';
        ]]]
  icon:
    - color: |
        [[[
          return hass.themes.darkMode ? '#c4c7d0' : '#43484e';
        ]]]
`;
}
