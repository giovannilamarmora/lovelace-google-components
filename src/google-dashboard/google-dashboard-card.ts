import { html, LitElement, css, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { fireEvent, HomeAssistant } from "custom-card-helpers";
import { localize } from "../localize/localize";

@customElement("google-dashboard-card")
export class GoogleDashboardCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: any;

  public static getStubConfig(): Partial<any> {
    return {
      type: "custom:google-dashboard-card",
    };
  }

  static getCardSize() {
    return 1;
  }

  static async getConfigElement() {
    return document.createElement("google-dashboard-card-editor");
  }

  public setConfig(config: any): void {
    if (!config) {
      throw new Error(localize("common.invalid_configuration"));
    }
    this._config = config;
  }

  /*protected render(): TemplateResult {
    if (!this._config)
      return html`<ha-card><div>Missing config</div></ha-card>`;

    return html`
      <ha-card>
        <swipe-card
          card_width="max-content"
          .parameters=${{
            grabCursor: true,
            centeredSlides: false,
            slidesPerView: "auto",
            spaceBetween: 8,
          }}
        >
          ${this._renderButtonCard(
            "Cameras",
            "m3r:videocam",
            "camera.",
            "#E8EAED",
            "#9AA0A6",
            "#8AB4F8",
            "#302f32",
            6
          )}
          ${this._renderButtonCard(
            "Lighting",
            "m3r:light-group",
            "light.",
            "#FFFFFF",
            "#9AA0A6",
            "#FBBC04",
            "#332f2a"
          )}
          ${this._renderButtonCard(
            "Wi-Fi",
            "m3of:wifi",
            "device_tracker.",
            "#FFFFFF",
            "#9AA0A6",
            "#81C995",
            "#2e312e"
          )}
          ${this._renderButtonCard(
            "Climate",
            "m3of:thermostat",
            "climate.",
            "#FFFFFF",
            "#9AA0A6",
            "#FF8A65",
            "#352f2d"
          )}
        </swipe-card>
      </ha-card>
    `;
  }

  private _renderButtonCard(
    name: string,
    icon: string,
    domain: string,
    nameColor: string,
    labelColor: string,
    iconColor: string,
    bgOn: string,
    staticLabelCount?: number
  ) {
    const entities = Object.keys(this.hass.states).filter((e) =>
      e.startsWith(domain)
    );
    const active = entities.filter((e) => this.hass.states[e].state === "on");
    const count = staticLabelCount ?? entities.length;
    const label = `${active.length}/${count} ${name.toLowerCase()}`;

    const isVisible = entities.length > 0;

    return isVisible
      ? html`
          <button-card
            icon=${icon}
            name=${name}
            label=${label}
            style="
              --button-card-background: ${bgOn};
              --button-card-name-color: ${nameColor};
              --button-card-label-color: ${labelColor};
              --button-card-icon-color: ${iconColor};
              height: 130px;
              width: 130px;
              border-radius: 30px;
              margin: 0 8px 8px 0;
            "
            .tap_action=${{
              action: "navigate",
              navigation_path: `./${name.toLowerCase()}`,
            }}
          ></button-card>
        `
      : html``;
  }

  static styles = css`
    swipe-card {
      display: block;
    }
  `;
}*/

  protected render(): TemplateResult {
    if (!this._config)
      return html`<ha-card><div>Missing config</div></ha-card>`;

    return html`
      <div class="horizontal-scroll">
        ${this._renderButtonCard(
          "Cameras",
          "m3r:videocam",
          "camera.",
          "#E8EAED",
          "#9AA0A6",
          "#8AB4F8",
          "#302f32",
          6
        )}
        ${this._renderButtonCard(
          "Lighting",
          "m3r:light-group",
          "light.",
          "#FFFFFF",
          "#9AA0A6",
          "#FBBC04",
          "#332f2a"
        )}
        ${this._renderButtonCard(
          "Wi-Fi",
          "m3of:wifi",
          "device_tracker.",
          "#FFFFFF",
          "#9AA0A6",
          "#81C995",
          "#2e312e"
        )}
        ${this._renderButtonCard(
          "Climate",
          "m3of:thermostat",
          "climate.",
          "#FFFFFF",
          "#9AA0A6",
          "#FF8A65",
          "#352f2d"
        )}
      </div>
    `;
  }

  private _renderButtonCard(
    name: string,
    icon: string,
    domain: string,
    nameColor: string,
    labelColor: string,
    iconColor: string,
    bgOn: string,
    staticLabelCount?: number
  ) {
    const entities = Object.keys(this.hass.states).filter((e) =>
      e.startsWith(domain)
    );
    const active = entities.filter((e) => this.hass.states[e].state === "on");
    const count = staticLabelCount ?? entities.length;
    const label = `${active.length}/${count} ${name.toLowerCase()}`;

    if (entities.length === 0) return html``;

    return html`
      <button
        class="button-card"
        @click=${fireEvent(this, "navigate" as any, {
          navigation_path: `./${name.toLowerCase()}`,
        })}
      >
        <ha-icon class="icon" .icon=${icon}></ha-icon>
        <div class="name" style="color: ${nameColor}">${name}</div>
        <div class="label" style="color: ${labelColor}">${label}</div>
      </button>
    `;
  }

  static styles = css`
    .horizontal-scroll {
      display: flex;
      overflow-x: auto;
      gap: 8px;
      padding: 8px;
    }
    .button-card {
      background-color: var(--bg-on, #eee);
      border-radius: 30px;
      padding: 16px;
      min-width: 120px;
      cursor: pointer;
      border: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      height: 130px;
      width: 130px;
      flex-shrink: 0;
      user-select: none;
      transition: background-color 0.3s ease;
    }
    .button-card:hover {
      filter: brightness(0.9);
    }
    .icon {
      font-size: 36px;
      color: var(--icon-color, #000);
    }
    .name {
      font-weight: bold;
      font-size: 1rem;
    }
    .label {
      font-size: 0.8rem;
      opacity: 0.7;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "google-dashboard-card": GoogleDashboardCard;
  }
}
