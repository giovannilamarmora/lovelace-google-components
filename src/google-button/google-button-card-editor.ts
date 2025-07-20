import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";
import { DEFAULT_BTN_CONFIG } from "../google-slider/const";
import { localize } from "../localize/localize";
import { ControlType, GoogleButtonCardConfig } from "./google-button-const";

@customElement("google-button-card-editor")
export class GoogleButtonCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: GoogleButtonCardConfig = DEFAULT_BTN_CONFIG;

  public setConfig(config: GoogleButtonCardConfig): void {
    this._config = { ...config };
  }

  private _valueChanged = (ev: Event): void => {
    const target = ev.target as any;
    const configValue = target.getAttribute("configValue");

    const value =
      ev instanceof CustomEvent && ev.detail?.value !== undefined
        ? ev.detail.value
        : (target.checked ?? target.value);

    if (!configValue || this._config[configValue] === value) return;

    this._config = {
      ...this._config,
      [configValue]: value,
    };

    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config },
      })
    );
  };

  private _entityChanged(ev: CustomEvent): void {
    const value = ev.detail.value;
    if (this._config?.entity === value) return;
    this._config = {
      ...this._config,
      entity: value,
    };
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config },
      })
    );
  }

  async firstUpdated() {
    const helpers = await (window as any).loadCardHelpers();
    const card = await helpers.createCardElement({
      type: "entities",
      entities: [],
    });
    await card.constructor.getConfigElement();
  }

  setEntityFilter() {
    switch (this._config.control_type) {
      case ControlType.THERMOMETER:
        return ["climate"];
      case ControlType.SCENE:
        return ["scene"];
      case ControlType.MEDIA_PLAYER:
        return ["media_player"];
      default:
        return undefined;
    }
  }

  render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html``;
    }

    this._config.use_default_icon = this._config.use_default_icon ?? true;

    return html`
      <div class="form">
        <span class="switch-label"
          >${localize("google_button_card.dual_icon.options")}</span
        >
        <ha-select
          label="${localize("google_button_card.control_type")}"
          .value=${this._config.control_type || "generic"}
          configValue="control_type"
          @selected=${this._valueChanged}
          @closed=${(ev: Event) => ev.stopPropagation()}
        >
          <mwc-list-item value="generic">
            ${localize("google_button_card.type.generic")}
          </mwc-list-item>
          <mwc-list-item value="thermometer">
            ${localize("google_button_card.type.thermometer")}
          </mwc-list-item>
          <mwc-list-item value="scene">
            ${localize("google_button_card.type.scene")}
          </mwc-list-item>
          <mwc-list-item value="media_player">
            ${localize("google_button_card.type.media")}
          </mwc-list-item>
        </ha-select>

        <ha-textfield
          label="${localize("google_button_card.name")}"
          .value=${this._config.name || ""}
          configValue="name"
          @input=${this._valueChanged}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <ha-entity-picker
          label="Entity"
          .value=${this._config.entity || ""}
          .hass=${this.hass}
          .includeDomains=${this.setEntityFilter()}
          allow-custom-entity
          configValue="entity"
          @value-changed=${this._entityChanged}
          required
        ></ha-entity-picker>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("google_button_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${this._config.use_default_icon ?? true}
            configValue="use_default_icon"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.use_default_icon
          ? html``
          : html`
              <div class="switch-row">
                <span class="switch-label"
                  >${localize("google_button_card.dual_icon.options")}</span
                >
                <ha-switch
                  .checked=${this._config.dual_icon ?? false}
                  configValue="dual_icon"
                  @change=${this._valueChanged}
                />
              </div>

              ${this._config.dual_icon
                ? html`
                    <div class="dual-icons">
                      <ha-icon-picker
                        label="Icon ON"
                        .value=${this._config.icon_on || ""}
                        configValue="icon_on"
                        @value-changed=${this._valueChanged}
                        placeholder="mdi:lightbulb-on"
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Icon OFF"
                        .value=${this._config.icon_off || ""}
                        configValue="icon_off"
                        @value-changed=${this._valueChanged}
                        placeholder="mdi:lightbulb-off"
                      ></ha-icon-picker>
                    </div>
                  `
                : html`
                    <ha-icon-picker
                      label="Icon"
                      .value=${this._config.icon || ""}
                      configValue="icon"
                      @value-changed=${this._valueChanged}
                      placeholder="mdi:lightbulb"
                    />
                  `}
            `}
      </div>
    `;
  }

  static styles = css`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .dual-icons {
      display: flex;
      gap: 16px;
    }

    .dual-icons ha-icon-input {
      flex: 1;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "google-button-card-editor": GoogleButtonCardEditor;
  }
}
