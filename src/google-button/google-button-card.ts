import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { GoogleButtonCardConfig } from "../google-slider/types";
import { localize } from "../localize/localize";
import { DEFAULT_BTN_CONFIG } from "../google-slider/const";
import { fireEvent } from "custom-card-helpers";
import { HomeAssistant } from "../ha-types";
import {
  getIcon,
  isOfflineState,
  mapStateDisplay,
} from "./google-button-mapper";
import { applyRippleEffect } from "../utils";

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

  public _onClick(event: MouseEvent) {
    applyRippleEffect(event.currentTarget as HTMLElement, event);
    this._toggle();
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

  private _pressTimer?: number;
  private _startX?: number;
  private _startY?: number;
  private _moved = false;

  private _startPress(event: MouseEvent | TouchEvent) {
    this._cancelPress(); // elimina timer precedente se presente
    this._moved = false;

    if (event instanceof TouchEvent && event.touches.length > 0) {
      this._startX = event.touches[0].clientX;
      this._startY = event.touches[0].clientY;
    } else if (event instanceof MouseEvent) {
      this._startX = event.clientX;
      this._startY = event.clientY;
    }

    this._pressTimer = window.setTimeout(() => {
      this._pressTimer = undefined;
      if (!this._moved) {
        this._handleHold();
      }
    }, 500);
  }

  private _handleMove(event: TouchEvent) {
    if (!this._startX || !this._startY || event.touches.length === 0) return;

    const moveX = event.touches[0].clientX;
    const moveY = event.touches[0].clientY;

    const deltaX = Math.abs(moveX - this._startX);
    const deltaY = Math.abs(moveY - this._startY);

    if (deltaX > 10 || deltaY > 10) {
      this._moved = true;
      this._cancelPress(); // annulla il timer
    }
  }

  private _cancelPress(event?: MouseEvent | TouchEvent) {
    if (this._pressTimer) {
      clearTimeout(this._pressTimer);
      this._pressTimer = undefined;
      if (!this._moved && event instanceof MouseEvent) {
        this._onClick(event); // solo click "buoni"
      }
    }
  }

  private _handleHold() {
    if (!this._config || !this.hass) return;
    fireEvent(this, "hass-more-info", { entityId: this._config.entity });
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

    const isOffline = isOfflineState(stateObj.state, this._config.control_type);
    const stateDisplay = mapStateDisplay(
      stateObj,
      this._config.control_type!,
      isOffline
    );

    const theme = this.hass?.themes?.darkMode ? "dark" : "light";

    this.setColorCard(this._config.control_type, theme, isOffline, isOn);

    return html`
      <ha-card
        class="google-button ${isOn ? "on" : "off"}"
        @mousedown=${this._startPress}
        @touchstart=${this._startPress}
        @mouseup=${this._cancelPress}
        @mouseleave=${this._cancelPress}
        @touchend=${this._cancelPress}
        @touchcancel=${this._cancelPress}
        @touchmove=${this._handleMove}
      >
        <div class="content">
          <ha-icon .icon=${icon} class="icon"></ha-icon>
          <div class="text">
            <div class="name">${name}</div>
            ${this._config.control_type == "scene"
              ? html``
              : html`<div class="state">${stateDisplay}</div>`}
          </div>
        </div>
        ${isOffline
          ? html`<ha-icon
              id="icon_offline"
              icon="m3rf:warning"
              style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color); --mdc-icon-size: 20px;"
              title="Offline"
            ></ha-icon>`
          : this._config.control_type == "thermometer"
            ? html`<ha-icon
                icon="m3rf:arrow-forward-ios"
                style="
                  position: absolute;
                  right: 5%;
                  top: 50%;
                  transform: translateY(-50%);
                  color: var(--bsc-icon-color);
                  --mdc-icon-size: 15px;
                "
                title="Enter"
                class="chevron"
              ></ha-icon>`
            : html``}
      </ha-card>
    `;
  }

  private setColorCard(
    control_type: any,
    theme: string,
    isOffline: boolean,
    isOn: boolean
  ) {
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
          containerColor = "rgba(258, 193.8, 166, 0.4)";
          //containerColor = "#ffd5c4";
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
      overflow: hidden; /* fondamentale per contenere il ripple */
      box-shadow:
        0px 0.5px 1px rgba(0, 0, 0, 0.05),
        0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
      -webkit-tap-highlight-color: transparent;
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
      font-size: 15px;
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

    @media (max-width: 420px) {
      .name,
      .state {
        font-size: small;
      }
      .name {
        line-height: 1.4;
      }
      #icon_offline {
        right: 15px;
      }
    }

    .ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple-animation 600ms ease-out;
      background-color: rgba(255, 255, 255, 0.3);
      pointer-events: none;
    }

    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "google-button-card": GoogleButtonCard;
  }
}
