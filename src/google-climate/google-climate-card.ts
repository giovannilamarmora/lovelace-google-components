import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { localize } from "../localize/localize";
import { HomeAssistant } from "../ha-types";
import {
  getIcon,
  isOfflineState,
  mapStateDisplay,
} from "../google-button/google-button-mapper";
import {
  DEFAULT_CONFIG,
  GoogleClimateCardConfig,
} from "./google-climate-const";
import { fireEvent } from "custom-card-helpers";
import { applyRippleEffect } from "../utils";

@customElement("google-climate-card")
export class GoogleClimateCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: GoogleClimateCardConfig = DEFAULT_CONFIG;

  public setConfig(config: GoogleClimateCardConfig): void {
    if (!config || !config.entity) {
      throw new Error(localize("common.invalid_configuration"));
    }
    this._config = config;
  }

  public static getStubConfig(
    _hass: HomeAssistant,
    entities: string[]
  ): Partial<GoogleClimateCardConfig> {
    const switcher = entities
      .filter((entity) => entity.split(".")[0] === "climate")
      .sort();
    const randomClimate = switcher[Math.floor(Math.random() * switcher.length)];
    return {
      type: "custom:google-climate-card",
      entity: randomClimate,
      increase_temp: 1,
      decrease_temp: 1,
    };
  }

  static getCardSize() {
    return 1;
  }

  static async getConfigElement() {
    return document.createElement("google-climate-card-editor");
  }

  public _onClick(event: MouseEvent) {
    applyRippleEffect(event.currentTarget as HTMLElement, event);
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }

    if (!this._config || !this.hass) return;

    const entityId = this._config.entity;

    fireEvent(this, "hass-more-info", { entityId });
  }

  private async _adjustTemp(delta: number): Promise<void> {
    console.log(delta);
    if (!this.hass || !this._config?.entity) return;

    const stateObj = this.hass.states[this._config.entity];
    const current = Number(stateObj?.attributes?.temperature);
    if (isNaN(current)) return;

    const newTemp = current + delta;

    this.hass.states[this._config.entity]!.attributes!.temperature! = newTemp;

    await this.hass.callService("climate", "set_temperature", {
      entity_id: this._config.entity,
      temperature: newTemp,
    });

    // Attendi un momento per permettere a HASS di aggiornare lo stato
    setTimeout(() => {
      this.requestUpdate(); // Forza il re-render manuale
    }, 500); // 500ms è solitamente sufficiente
  }

  protected render(): TemplateResult {
    if (!this._config || !this.hass) return html``;

    const stateObj = this.hass.states[this._config.entity!];
    if (!stateObj) {
      return html`<ha-card
        ><div class="warning">${localize("common.no_entity")}</div></ha-card
      >`;
    }

    const name = this._config.name || stateObj.attributes.friendly_name;
    const isOffline = isOfflineState(stateObj.state);

    console.log(stateObj, this._config.entity, isOffline);
    const stateDisplay = mapStateDisplay(stateObj, "thermometer", isOffline);

    const config = {
      control_type: "thermometer",
    };

    return html`
      <div class="temperature-card">
        <div class="header" @click=${this._onClick}>
          <div class="valve-info">
            <ha-icon
              id="icon_offline"
              icon="${getIcon(stateObj, config)}"
              title="Climate"
              style="
                  --mdc-icon-size: 20px;
                  margin-bottom: 3px;
                "
            ></ha-icon>
            <span class="valve-name">${name}</span>
          </div>

          ${isOffline
            ? html`<ha-icon
                id="icon_offline"
                icon="mdi:alert"
                style="position: absolute; right: 0px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color);"
                title="Offline"
              ></ha-icon>`
            : html`<ha-icon
                icon="m3rf:arrow-forward-ios"
                style="
                  position: absolute;
                  right: 0px;
                  top: 50%;
                  transform: translateY(-50%);
                  color: var(--bsc-icon-color);
                  --mdc-icon-size: 15px;
                "
                title="Enter"
                class="chevron"
              ></ha-icon> `}
        </div>
        ${isOffline
          ? html`
              <div
                class="temperature-control"
                style="justify-content: center; margin-bottom: 45px;"
              >
                <div class="temperature-display">Offline</div>
              </div>
            `
          : html`
              <div class="temperature-control">
                <button
                  class="control-btn minus-btn"
                  @click=${() =>
                    this._adjustTemp(
                      -this._config.decrease_temp |
                        -DEFAULT_CONFIG.decrease_temp
                    )}
                >
                  −
                </button>
                <div class="temperature-display" id="tempDisplay">
                  ${stateObj.attributes.temperature}
                </div>
                <button
                  class="control-btn plus-btn"
                  @click=${() =>
                    this._adjustTemp(
                      this._config.decrease_temp | DEFAULT_CONFIG.increase_temp
                    )}
                >
                  +
                </button>
              </div>

              <div class="internal-temp">
                <span id="internalTemp">${stateDisplay}</span>
              </div>
            `}
      </div>
    `;
  }

  static styles = css`
    .temperature-card {
      background: linear-gradient(135deg, #4a4a4a 0%, #3a3a3a 100%);
      border-radius: 28px;
      padding: 10px 15px;
      width: -webkit-fill-available;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      position: relative;
      overflow: hidden;
    }

    .temperature-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #414246;
      border-radius: 24px;
      pointer-events: none;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 25px;
      position: relative;
      z-index: 2;
      pointer-events: visible;
      cursor: pointer;
      -webkit-user-select: none; /* Safari */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+/Edge */
      user-select: none; /* Standard */
    }

    .valve-info {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: 5px;
    }

    .steam-icon {
      color: #888;
      font-size: 20px;
    }

    .valve-name {
      color: #c3c3c3;
      font-size: 16px;
      font-weight: 500;
    }

    .chevron {
      color: #c3c3c3;
      font-size: 20px;
      cursor: pointer;
      transition: color 0.2s ease;
    }

    .chevron:hover {
      color: #ccc;
    }

    .temperature-control {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
      position: relative;
      z-index: 2;
    }

    .control-btn {
      width: 80px;
      height: 55px;
      border-radius: 30px;
      background: #5c5b60;
      border: none;
      color: #c3c3c3;
      font-size: 32px;
      font-weight: 300;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
    }

    .control-btn:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: scale(1.05);
    }

    .control-btn:active {
      transform: scale(0.98);
    }

    .temperature-display {
      color: #c3c3c3;
      font-size: 72px;
      font-weight: 450;
      text-align: center;
      line-height: 1;
    }

    .internal-temp {
      text-align: center;
      color: #c1c2c6;
      font-size: 15px;
      font-weight: 400;
      position: relative;
      z-index: 2;
      margin-bottom: 20px;
    }

    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    }

    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }

    @media (max-width: 420px) {
      .valve-name,
      .state {
        font-size: 15px;
      }
      .valve-name {
        line-height: 1.4;
        margin-bottom: 2px;
      }

      #icon_offline {
        margin-bottom: 5px;
      }

      .temperature-display {
        font-size: 60px;
      }

      .control-btn {
        width: 65px;
        height: 45px;
        font-size: 28px;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "google-climate-card": GoogleClimateCard;
  }
}
