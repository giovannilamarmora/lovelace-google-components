import { CARD_VERSION } from "./google-slider/const";
import { GoogleButtonCard } from "./google-button/google-button-card";
import { GoogleButtonCardEditor } from "./google-button/google-button-card-editor";
import { GoogleDashboardCard } from "./google-dashboard/google-dashboard-card";
import { GoogleDashboardCardEditor } from "./google-dashboard/google-dashboard-card-editor";
import { GoogleSliderCard } from "./google-slider/google-slider-card";
import { localize } from "./localize/localize";
import { GoogleClimateCard } from "./google-climate/google-climate-card";

/* eslint no-console: 0 */
console.info(
  `%c  GOOGLE-SLIDER-CARD \n%c  ${localize("common.version")} ${CARD_VERSION}    `,
  "color: orange; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: dimgray"
);

customElements.define("google-slider-card", GoogleSliderCard);

if (!customElements.get("google-button-card")) {
  customElements.define("google-button-card", GoogleButtonCard);
}

if (!customElements.get("google-button-card-editor")) {
  customElements.define("google-button-card-editor", GoogleButtonCardEditor);
}

if (!customElements.get("google-dashboard-card")) {
  customElements.define("google-dashboard-card", GoogleDashboardCard);
}

if (!customElements.get("google-dashboard-card-editor")) {
  customElements.define(
    "google-dashboard-card-editor",
    GoogleDashboardCardEditor
  );
}

if (!customElements.get("google-climate-card")) {
  customElements.define("google-climate-card", GoogleClimateCard);
}

(window as any).customCards = (window as any).customCards ?? [];
(window as any).customCards.push({
  type: "google-slider-card",
  name: "Google Slider Card",
  preview: true,
  description: "Google Slider Card for light entities.",
});

(window as any).customCards.push({
  type: "google-button-card",
  name: "Google Button Card",
  preview: true,
  description: "Google-style button card.",
});

(window as any).customCards.push({
  type: "google-dashboard-card",
  name: "Google Dashboard Card",
  preview: true,
  description: "Google-style Dashboard card.",
});

(window as any).customCards.push({
  type: "google-climate-card",
  name: "Google Climate Card",
  preview: true,
  description: "Google-style Climate card.",
});
