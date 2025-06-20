import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { GoogleButtonCardConfig } from "../types";
import { localize } from "../localize/localize";
import { DEFAULT_BTN_CONFIG } from "../const";
import { fireEvent } from "custom-card-helpers";
import { HomeAssistant } from "../ha-types";
import {
  getIcon,
  isOfflineState,
  mapStateDisplay,
} from "./google-button-mapper";

@customElement("google-button-card")
export class GoogleButtonCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: GoogleButtonCardConfig = DEFAULT_BTN_CONFIG;

  public setConfig(config: GoogleButtonCardConfig): void {
    if (!config || !config.entity) {
      throw new Error(localize("common.invalid_configuration"));
    }
    this._config = config;
  }

  public static getStubConfig(
    _hass: HomeAssistant,
    entities: string[]
  ): Partial<GoogleButtonCardConfig> {
    const switcher = entities
      .filter((entity) => entity.split(".")[0] === "switch")
      .sort();
    const randomSwitch = switcher[Math.floor(Math.random() * switcher.length)];
    return {
      type: "custom:google-button-card",
      entity: randomSwitch,
      icon: "mdi:switch",
      height: 95,
    };
  }

  static getCardSize() {
    return 1;
  }

  static async getConfigElement() {
    return document.createElement("google-button-card-editor");
  }

  private _toggle() {
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }

    if (!this._config || !this.hass) return;

    const entityId = this._config.entity;
    const controlType = this._config.control_type || "generic";

    if (controlType === "thermometer") {
      fireEvent(this, "hass-more-info", { entityId });
    } else {
      this.hass.callService("homeassistant", "toggle", {
        entity_id: entityId,
      });
    }
  }

  protected render(): TemplateResult {
    if (!this._config || !this.hass) return html``;

    const stateObj = this.hass.states[this._config.entity!];
    if (!stateObj) {
      return html`<ha-card
        ><div class="warning">${localize("common.no_entity")}</div></ha-card
      >`;
    }

    const isOn =
      stateObj.state === "on" ||
      stateObj.state === "auto" ||
      stateObj.state === "heat" ||
      stateObj.state === "cool";
    //const domain = this._config.entity!.split(".")[0];
    const name = this._config.name || stateObj.attributes.friendly_name;
    const icon = getIcon(stateObj, this._config);
    //let icon = "";
    //if (this._config.icon && this._config.icon.trim() !== "") {
    //  icon = this._config.icon;
    //} else if (
    //  stateObj.attributes.icon &&
    //  stateObj.attributes.icon.trim() !== ""
    //) {
    //  icon = stateObj.attributes.icon;
    //} else {
    //  icon = `mdi:${domain}`;
    //}

    const isOffline = isOfflineState(stateObj.state);
    const stateDisplay = mapStateDisplay(
      stateObj,
      this._config.control_type!,
      isOffline
    );

    const theme = this.hass?.themes?.darkMode ? "dark" : "light";
    console.log(this._config);

    this.setColorCard(this._config.control_type, theme, isOffline, isOn);

    return html`
      <ha-card
        class="google-button ${isOn ? "on" : "off"}"
        @click=${this._toggle}
      >
        <div class="content">
          <ha-icon .icon=${icon} class="icon"></ha-icon>
          <div class="text">
            <div class="name">${name}</div>
            <div class="state">${stateDisplay}</div>
          </div>
        </div>
        ${isOffline
          ? html`
              <ha-icon
                id="icon_offline"
                icon="mdi:alert"
                style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color);"
                title="Offline"
              ></ha-icon>
            `
          : ""}
      </ha-card>
    `;
  }

  private setColorCard(
    control_type: any,
    theme: string,
    isOffline: boolean,
    isOn: boolean
  ) {
    console.log(control_type, theme, isOffline, isOn);
    let nameColor = "";
    let iconColor = "";
    let percentageColor = "";
    let containerColor = "";
    if (isOffline) {
      // Offline, tema light
      if (theme === "light") {
        nameColor = iconColor = percentageColor = "#949496";
        containerColor = "#dfdfe1";
      } else {
        // Offline, tema dark
        nameColor = iconColor = percentageColor = "#717173";
        containerColor = "#2c2c2e";
      }
    } else if (isOn) {
      // Acceso, tema dark
      if (theme === "dark") {
        if (control_type === "thermometer") {
          nameColor = iconColor = percentageColor = "#fedcca";
          containerColor = "#5c4035";
        } else {
          nameColor = iconColor = percentageColor = "#d8e3f7";
          containerColor = "#3e4758";
        }
      } else {
        // Acceso, tema light
        if (control_type === "thermometer") {
          nameColor = iconColor = percentageColor = "#812800";
          containerColor = "#ffd5c4";
        } else {
          nameColor = iconColor = percentageColor = "#131c2b";
          containerColor = "#d8e3f7";
        }
      }
    } else {
      // Spento, tema dark
      if (theme === "dark") {
        nameColor = iconColor = percentageColor = "#e3e3e5";
        containerColor = "#292a2e";
      } else {
        // Spento, tema light
        nameColor = iconColor = percentageColor = "#1b1b1d";
        containerColor = "#e8e8ea";
      }
    }

    //// Acceso e Dark Mode
    //if (isOn && theme === "dark") {
    //  nameColor = iconColor = percentageColor = "#d8e3f7";
    //  containerColor = "#3e4758";
    //  // Acceso e Light Mode
    //} else if (isOn) {
    //  nameColor = iconColor = percentageColor = "#131c2b";
    //  containerColor = "#d8e3f7";
    //  // Spento e Dark Mode
    //} else if (theme === "dark") {
    //  nameColor = iconColor = percentageColor = "#e3e3e5";
    //  containerColor = "#292a2e";
    //  // Spento e Light Mode
    //} else {
    //  nameColor = iconColor = percentageColor = "#1b1b1d";
    //  containerColor = "#e8e8ea";
    //}
    //
    //if (isOffline && theme === "light") {
    //  nameColor = iconColor = percentageColor = "#949496";
    //  containerColor = "#dfdfe1";
    //} else if (isOffline && theme === "dark") {
    //  nameColor = iconColor = percentageColor = "#717173";
    //  containerColor = "#2c2c2e";
    //}

    this._setStyleProperty("--bsc-name-color", nameColor);
    this._setStyleProperty("--bsc-icon-color", iconColor);
    this._setStyleProperty("--bsc-percentage-color", percentageColor);
    this._setStyleProperty("--bsc-background", containerColor);
    this._setStyleProperty(
      "--bsc-height",
      this._config.height || 95,
      (h) => `${h}px`
    );
    this._setStyleProperty("--bsc-border-radius", this._config.border_radius);
  }

  _setStyleProperty(
    name: string,
    value: any,
    transform = (value: any): string => value
  ): void {
    if (value !== undefined && value !== null && value !== "") {
      this.style.setProperty(name, transform(value));
    }
  }

  static styles = css`
    :host {
      --bsc-height: var(--ha-card-height, 95px);
      --bsc-border-radius: var(--ha-card-border-radius);
    }

    ha-card.google-button {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 12px 16px;
      border-radius: var(--bsc-border-radius, 28px);
      background: var(--bsc-background);
      transition:
        background-color 0.3s ease,
        color 0.3s ease;
      height: var(--bsc-height);
    }

    .content {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .icon {
      width: 32px;
      height: 32px;
      margin-right: 5px;
      color: var(--bsc-icon-color);
      align-content: center;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .name {
      color: var(--bsc-name-color);
      font-size: 16px;
      font-weight: 500;
    }

    .state {
      font-size: 13px;
      color: var(--bsc-percentage-color);
    }

    .warning {
      padding: 16px;
      color: red;
      font-weight: bold;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "google-button-card": GoogleButtonCard;
  }
}
