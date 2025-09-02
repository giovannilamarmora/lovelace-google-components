import { LitElement, html, css, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant } from "../ha-types";
import { applyRippleEffect } from "../utils";
import { localize } from "../localize/localize";

@customElement("google-media-overlay")
export class GoogleMediaOverlay extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property() public entity!: string;

  @state() private _closing = false;

  private _close() {
    this._closing = true;
    setTimeout(() => {
      this.dispatchEvent(
        new CustomEvent("close-overlay", {
          bubbles: true,
          composed: true,
        })
      );
    }, 200);
  }

  private _settings() {
    if (!this.hass || !this.entity) return;

    // trova l'entità nello stato
    const stateObj = this.hass.states[this.entity];
    if (!stateObj) return;

    // cerca il device_id associato all'entità
    const entity = this.hass.entities[this.entity];
    const deviceId = entity?.device_id;

    this._close();

    setTimeout(() => {
      if (deviceId) {
        const settingsUrl = `/config/devices/device/${deviceId}`;
        //window.location.href = settingsUrl;
        window.location.assign(settingsUrl);
      } else {
        this._moreInfo();
      }
    }, 200);
  }

  private _moreInfo() {
    if (!this.hass || !this.entity) return;

    const stateObj = this.hass.states[this.entity];
    if (!stateObj) return;

    this._close();

    const event = new CustomEvent("hass-more-info", {
      detail: { entityId: this.entity },
      bubbles: true,
      composed: true,
    });

    // forza dispatch sul root
    document.querySelector("home-assistant")?.dispatchEvent(event);
  }

  public _onClick(event: MouseEvent) {
    // Feedback tattile (se supportato)
    navigator.vibrate?.(50);
    applyRippleEffect(event.currentTarget as HTMLElement, event);
  }

  private _onRemoteClick(e: any) {
    this._onClick(e);
    this._moreInfo();
  }

  private _turnOnDevice(e: any) {
    this._onClick(e);
    if (!this.entity || !this.hass) return;
    this._callService("turn_on"); // accende il media player
  }

  private _stopCast(e: any) {
    this._onClick(e);
    if (!this.entity || !this.hass) return;
    this._callService("media_stop"); // ferma la riproduzione/cast
  }

  private _callService(service: string, data: any = {}) {
    if (!this.entity) return;
    this.hass.callService("media_player", service, {
      entity_id: this.entity,
      ...data,
    });
  }

  protected updated() {
    const stateObj = this.hass.states[this.entity];
    if (!stateObj) return;
    const volume = stateObj.attributes.volume_level ?? 0; // 0..1

    const slider = this.renderRoot.querySelector<HTMLDivElement>("#slider");
    const text = this.renderRoot.querySelector<HTMLSpanElement>("#volumeText");
    if (slider) slider.style.width = `${volume * 100}%`;
    if (text) text.textContent = `${Math.round(volume * 100)}%`;
  }

  // ------------------------------------------
  //  Volume Bar
  // ------------------------------------------
  _startDrag(e: MouseEvent | TouchEvent) {
    e.preventDefault();
    const sliderContainer =
      this.renderRoot.querySelector<HTMLDivElement>(".volume-card");
    if (!sliderContainer) return;

    const updateVolume = (ev: MouseEvent | TouchEvent) => {
      const rect = sliderContainer.getBoundingClientRect();
      let clientX: number;
      if (ev instanceof TouchEvent) clientX = ev.touches[0].clientX;
      else clientX = ev.clientX;

      // calcola volume 0..1 in base alla posizione del click/drag
      let volume = (clientX - rect.left) / rect.width;
      volume = Math.min(Math.max(volume, 0), 1); // clamp 0..1
      console.log("VOL", volume);

      // aggiorna barra slider
      const slider = sliderContainer.querySelector<HTMLDivElement>("#slider");
      if (slider) slider.style.width = `${volume * 100}%`;

      // aggiorna testo
      const text =
        sliderContainer.querySelector<HTMLSpanElement>("#volumeText");
      if (text) text.textContent = `${Math.round(volume * 100)}%`;

      // chiama servizio Home Assistant
      this._callService("volume_set", { volume_level: volume });
    };

    const moveHandler = (ev: MouseEvent | TouchEvent) => updateVolume(ev);
    const upHandler = () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseup", upHandler);
      window.removeEventListener("touchmove", moveHandler);
      window.removeEventListener("touchend", upHandler);
    };

    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mouseup", upHandler);
    window.addEventListener("touchmove", moveHandler);
    window.addEventListener("touchend", upHandler);

    updateVolume(e); // volume iniziale
  }

  // ------------------------------------------
  //  Progress Bar
  // ------------------------------------------
  private _getProgress(): number {
    const stateObj = this.hass.states[this.entity];
    if (!stateObj) return 0;
    const duration = stateObj.attributes.media_duration ?? 1; // evita divisione per 0
    const position = stateObj.attributes.media_position ?? 0;
    return Math.min(100, Math.max(0, (position / duration) * 100));
  }

  _startSeek(e: MouseEvent | TouchEvent) {
    e.preventDefault();
    const progressBar =
      this.renderRoot.querySelector<HTMLDivElement>(".progress-bar");
    if (!progressBar) return;

    const updatePosition = (ev: MouseEvent | TouchEvent) => {
      const rect = progressBar.getBoundingClientRect();
      let clientX: number;
      if (ev instanceof TouchEvent) clientX = ev.touches[0].clientX;
      else clientX = ev.clientX;

      let progress = (clientX - rect.left) / rect.width;
      progress = Math.min(Math.max(progress, 0), 1);

      // aggiorna barra e thumb
      const fill = progressBar.querySelector<HTMLDivElement>(".progress-fill");
      const thumb =
        progressBar.querySelector<HTMLDivElement>(".progress-thumb");
      if (fill) fill.style.width = `${progress * 100}%`;
      if (thumb) thumb.style.left = `calc(${progress * 100}% - 6px)`;

      // calcola posizione in secondi e chiama il servizio
      const stateObj = this.hass.states[this.entity];
      if (!stateObj) return;
      const duration = stateObj.attributes.media_duration ?? 1;
      this._callService("media_seek", { seek_position: progress * duration });
    };

    const moveHandler = (ev: MouseEvent | TouchEvent) => updatePosition(ev);
    const upHandler = () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseup", upHandler);
      window.removeEventListener("touchmove", moveHandler);
      window.removeEventListener("touchend", upHandler);
    };

    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mouseup", upHandler);
    window.addEventListener("touchmove", moveHandler);
    window.addEventListener("touchend", upHandler);

    updatePosition(e); // posizione iniziale
  }

  protected render(): TemplateResult {
    const stateObj = this.hass.states[this.entity];
    if (!stateObj) return html``;

    const { attributes, state } = stateObj;
    const isPlaying = state === "playing";
    const volume = (attributes.volume_level * 100).toFixed(0) ?? 0;
    const mediaTitle =
      attributes.media_title ??
      localize("google_media_overlay.media_card.no_content");
    const mediaArtist = attributes.media_artist ?? "";
    const appName = attributes.app_name ?? "";
    //const cover = attributes.entity_picture_local;
    const isOff = state === "off";

    return html`
      <div class="overlay ${this._closing ? "closing" : ""}">
        <div class="header">
          <div class="header-left">
            <ha-icon-button @click=${this._close} class="close-btn">
              <ha-icon
                icon="m3rf:close"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Close"
              ></ha-icon>
            </ha-icon-button>

            <span class="friendly-name">${attributes.friendly_name}</span>
          </div>
          <div class="header-right">
            <ha-icon-button @click=${this._settings} class="settings-btn">
              <ha-icon
                icon="m3r:settings"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Settings"
              ></ha-icon>
            </ha-icon-button>
            <ha-icon-button @click=${this._moreInfo} class="settings-btn">
              <ha-icon
                icon="mdi:dots-vertical"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Menu"
              ></ha-icon>
            </ha-icon-button>
          </div>
        </div>

        <!-- Video Player Card -->
        <div class="video-card">
          <ha-icon
            icon="m3r:play-circle"
            style="color: var(--bsc-icon-color);"
            title="Play"
          ></ha-icon>
          ${isOff
            ? html``
            : html`<ha-icon
                class="pause-button"
                icon=${isPlaying ? "mdi:pause" : "mdi:play"}
                @click=${() =>
                  this._callService(isPlaying ? "media_pause" : "media_play")}
              >
              </ha-icon>`}

          <div class="video-info">
            <div class="video-title ellipsis">${mediaTitle}</div>
            <div class="video-channel">${mediaArtist}</div>
          </div>

          <div class="video-controls">
            <ha-icon
              class="${isOff ? "disabled" : ""}"
              style="cursor: pointer;"
              icon="m3r:skip-previous"
              @click=${() => this._callService("media_previous_track")}
            ></ha-icon>
            <div
              class="progress-bar ${isOff ? "disabled" : ""}"
              @mousedown=${this._startSeek}
              @touchstart=${this._startSeek}
            >
              <div
                class="progress-fill"
                style="width: ${this._getProgress()}%"
              ></div>
              <div
                class="progress-thumb"
                style="left: calc(${this._getProgress()}% - 6px)"
              ></div>
            </div>
            <ha-icon
              class="${isOff ? "disabled" : ""}"
              style="cursor: pointer;"
              icon="m3r:skip-next"
              @click=${() => this._callService("media_next_track")}
            ></ha-icon>
          </div>
        </div>

        <div
          class="volume-card"
          @mousedown=${this._startDrag}
          @touchstart=${this._startDrag}
        >
          <div id="slider" class="animate"></div>
          <ha-icon icon="m3rf:volume-up"></ha-icon>
          <span class="volume-text" id="volumeText">${volume}%</span>
        </div>

        <!-- Menu Cards -->
        <div class="menu-card remote" @click=${this._onRemoteClick}>
          <ha-icon icon="m3o:google-tv-remote"></ha-icon>
          <span class="menu-text"
            >${localize("google_media_overlay.remote")}</span
          >
        </div>

        ${isOff || !isPlaying
          ? html`<div class="menu-card link" @click=${this._turnOnDevice}>
              <ha-icon icon="m3r:cast"></ha-icon>
              <span class="menu-text">Trasmetti schermo</span>
            </div>`
          : html`<div class="menu-card cast" @click=${this._stopCast}>
              <ha-icon icon="m3rf:cast"></ha-icon>
              <span class="menu-text">Interrompi trasmissione</span>
            </div>`}
        ${appName == "YouTube"
          ? html`<div class="menu-card link" @click=${this._onClick}>
              <ha-icon icon="m3rf:open-in-new"></ha-icon>
              <span class="menu-text">Apri ${appName}</span>
            </div>`
          : html``}
        <div class="menu-card link" @click=${this._onClick}>
          <ha-icon icon="m3of:home-app-logo"></ha-icon>
          <span class="menu-text">Apri Google Home</span>
        </div>
      </div>
    `;
  }

  static styles = css`
    .overlay {
      position: fixed;
      inset: 0;
      background: var(--card-background-color, #121212);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px; /* aggiornato */
      z-index: 9999;
      animation: fadeIn 0.3s ease;
      gap: 16px; /* spazio verticale tra blocchi */
    }

    .overlay.closing {
      animation: fadeOut 0.3s ease forwards;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .header-left .friendly-name {
      color: var(--primary-text-color);
      font-size: 18px;
      font-weight: 500;
    }

    .header-right {
      display: flex;
      gap: 10px;
    }

    .close-btn,
    .setting-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0; /* opzionale, riduce eventuali margini interni */
      width: 40px; /* puoi regolare la dimensione */
      height: 40px; /* così l’icona è perfettamente centrata */
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(20px);
      }
    }

    /* Video Player Card */
    .video-card {
      background-color: var(--md-sys-color-surface-container);
      border-radius: 28px;
      padding: 18px;
      position: relative;
      height: 180px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 500px;
      width: -webkit-fill-available;
    }

    .play-button {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 48px;
      height: 48px;
      background-color: rgba(29, 27, 32, 0.8);
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      cursor: pointer;
      font-size: 20px;
    }

    .pause-button {
      position: absolute;
      top: calc(50% - 24px);
      right: 20px;
      background-color: var(--md-sys-color-secondary-container);
      border-radius: 12px;
      padding: 12px 12px;
      font-size: 24px;
      color: #1d1b20;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .video-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1; /* Aggiungi questo */
      min-width: 0; /* Necessario per evitare overflow nel flex */
      margin-top: 30px;
      margin-right: 70px;
    }

    .ellipsis {
      white-space: nowrap; /* forza il testo su una sola riga */
      overflow: hidden; /* nasconde l’eccesso */
      text-overflow: ellipsis; /* mostra i "..." alla fine */
    }

    .video-title {
      font-size: 20px;
      font-weight: 500;
      color: #1d1b20;
      margin-bottom: 4px;
      line-height: 1.2;
    }

    .video-channel {
      font-size: 14px;
      color: #49454f;
      font-weight: 400;
    }

    .video-controls {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 24px;
    }

    .control-btn {
      font-size: 32px;
      color: #49454f;
      cursor: pointer;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .progress-bar {
      flex: 1;
      height: 6px;
      background-color: #ccc;
      border-radius: 50px;
      position: relative;
      cursor: pointer;
      margin: 0px 30px;
    }

    .progress-fill {
      height: 100%;
      background-color: #6750a4;
      width: 0%;
      transition: width 0.2s linear;
      border-radius: 50px 0px 0px 50px;
    }

    .progress-thumb {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #fff;
      border: 2px solid #6750a4;
      pointer-events: none; /* il drag si gestisce sul parent */
    }

    /* Volume Card */
    .volume-card {
      background-color: var(--md-sys-color-secondary-container);
      border-radius: 50px;
      padding: 24px 18px;
      display: flex;
      align-items: center;
      gap: 16px;
      max-width: 500px;
      width: -webkit-fill-available;
      position: relative;
      overflow: hidden; /* importante per contenere l’overlay */
      z-index: 1;
    }

    /* overlay che schiarisce solo lo sfondo */
    .volume-card::before {
      content: "";
      position: absolute;
      inset: 0;
      background-color: var(--md-sys-color-secondary-container);
      filter: brightness(1.05); /* schiarisce solo il background */
      border-radius: inherit;
      z-index: 0; /* resta dietro */
    }

    /* contenuto sopra */
    .volume-card > * {
      position: relative;
      z-index: 1;
    }

    .volume-icon {
      font-size: 24px;
      color: #1d1b20;
    }

    .volume-text {
      font-size: 16px;
      font-weight: 500;
      color: #1d1b20;
    }

    #slider {
      height: 100%;
      position: absolute;
      background-color: var(--md-sys-color-secondary-container);
      z-index: 1; /* sopra lo sfondo schiarito */
      left: 0;
      top: 0;
      /*right: 50%;*/
      width: 0%;
      border-radius: 50px 0px 0px 50px;
    }

    #slider.animate {
      transition:
        right 1s ease,
        background-color 1s ease,
        filter 1s ease;
    }

    /* Menu Cards */
    .menu-card {
      /*margin-top: -20px;
      margin-bottom: -20px;
      margin: -20px 0px;*/
      border-radius: 14px;
      padding: 24px 18px;
      display: flex;
      align-items: center;
      gap: 16px;
      cursor: pointer;
      transition: all 0.2s ease;
      max-width: 500px;
      width: -webkit-fill-available;
    }

    .menu-card.remote {
      background-color: var(--md-sys-color-surface-container);
    }

    .menu-card.cast {
      background-color: var(--md-sys-color-secondary-container);
      border-radius: 50px;
    }

    .menu-card.link {
      background-color: var(--md-sys-color-surface-container);
    }

    .menu-text {
      font-size: 16px;
      color: #1d1b20;
      font-weight: 400;
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

    .disabled,
    div.disabled,
    button:disabled,
    input:disabled,
    select:disabled,
    textarea:disabled {
      color: #888888 !important;
      cursor: not-allowed !important;
      opacity: 0.6 !important;
    }
  `;
}
