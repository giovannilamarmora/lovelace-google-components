import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { localize } from "../localize/localize";
import { HomeAssistant } from "../ha-types";
import {
  DEFAULT_CONFIG,
  GoogleControlCardConfig,
  googleControlTemplate,
} from "./google-control-const";
import jsyaml from "js-yaml";

@customElement("google-control-card")
export class GoogleControlCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: GoogleControlCardConfig = DEFAULT_CONFIG;
  @state() private _card?: any;

  public async setConfig(config: GoogleControlCardConfig): Promise<void> {
    if (!config) {
      throw new Error(localize("common.invalid_configuration"));
    }
    this._config = config;
  }

  public static getStubConfig(): Partial<GoogleControlCardConfig> {
    return {
      type: "custom:google-control-card",
      name: "Control Card",
      icon: "mdi:link",
    };
  }

  protected async updated(changedProps: Map<string, any>) {
    if (changedProps.has("hass")) {
      if (this._card) {
        this._card.hass = this.hass; // aggiorna la card esistente
      } else if (this._config) {
        const template = this.mapTemplate();
        const configJson = jsyaml.load(template);

        const helpers = await (window as any).loadCardHelpers();
        const card = await helpers.createCardElement(configJson);
        card.classList.add("ripple-card");
        card.hass = this.hass;

        this._card = card;
        this.requestUpdate();
      }
    }
  }

  static getCardSize() {
    return 1;
  }

  static async getConfigElement() {
    return document.createElement("google-control-card-editor");
  }

  private mapTemplate() {
    const stateObj = this.hass.states[this._config.entity!];
    const name = this._config.name || stateObj.attributes.friendly_name;
    const text = googleControlTemplate(name!, this._config.icon!);
    return text;
  }

  protected render(): TemplateResult {
    if (!this._card) {
      return html`<ha-card>Loading…</ha-card>`;
    }

    // Avvolgi il contenuto in un div che intercetta il click
    return html`${this._card}`;
  }

  static styles = css`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `;

  protected createRenderRoot() {
    return this;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "google-control-card": GoogleControlCard;
  }
}
