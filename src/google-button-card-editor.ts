import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";
import { GoogleButtonCardConfig } from "./types";
import { DEFAULT_BTN_CONFIG } from "./const";
import { localize } from "./localize/localize";

@customElement("google-button-card-editor")
export class GoogleButtonCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: GoogleButtonCardConfig = DEFAULT_BTN_CONFIG;
  private _debounceTimeout?: number;

  public setConfig(config: GoogleButtonCardConfig): void {
    this._config = { ...config };
  }

  private _valueChanged = (ev: Event): void => {
    const target = ev.target as any;
    const configValue = target.getAttribute("configValue");
    const value = target.value;

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

  //private _valueChanged = (ev: CustomEvent): void => {
  //  ev.stopPropagation();
  //  const target = ev.target as HTMLElement & {
  //    configValue?: keyof GoogleButtonCardConfig;
  //  };
  //  const configKey = target.configValue;
  //  const value = ev.detail?.value;
  //
  //  if (!configKey || this._config?.[configKey] === value) return;
  //
  //  this._config = {
  //    ...this._config,
  //    [configKey]: value,
  //  };
  //
  //  clearTimeout(this._debounceTimeout);
  //  this._debounceTimeout = window.setTimeout(() => {
  //    this.dispatchEvent(
  //      new CustomEvent("config-changed", {
  //        detail: { config: this._config },
  //      })
  //    );
  //  }, 500);
  //};

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

    if (!customElements.get("ha-icon-input")) {
      const iconInput = document.createElement("ha-icon-input");
      document.body.appendChild(iconInput); // forza caricamento
      document.body.removeChild(iconInput);
    }
  }

  render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html``;
    }

    return html`
      <div class="form">
        <ha-select
          label="${localize("google_button_card.control_type")}"
          .value=${this._config.control_type || "generic"}
          configValue="control_type"
          @selected=${this._valueChanged}
          @closed=${(ev: Event) => ev.stopPropagation()}
        >
          <mwc-list-item value="generic"
            >${localize("google_button_card.type.generic")}</mwc-list-item
          >
          <mwc-list-item value="thermometer"
            >${localize("google_button_card.type.thermometer")}</mwc-list-item
          >
        </ha-select>

        <ha-entity-picker
          label="Entity"
          .value=${this._config.entity || ""}
          .hass=${this.hass}
          allow-custom-entity
          configValue="entity"
          @value-changed=${this._entityChanged}
          required
        ></ha-entity-picker>

        <ha-icon-input
          label="Icon"
          .value=${this._config.icon || ""}
          configValue="icon"
          @value-changed=${this._valueChanged}
          placeholder="mdi:lightbulb"
        ></ha-icon-input>

        <ha-textfield
          label="Attribute"
          .value=${this._config.attribute || ""}
          configValue="attribute"
          @input=${this._valueChanged}
          placeholder="e.g. brightness"
        ></ha-textfield>

        <ha-textfield
          label="Height (px)"
          .value=${this._config.height || ""}
          configValue="height"
          type="number"
          min="0"
          @input=${this._valueChanged}
        ></ha-textfield>
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
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "google-button-card-editor": GoogleButtonCardEditor;
  }
}
