import { LovelaceCardConfig } from "custom-card-helpers";

export interface GoogleClimateCardConfig extends LovelaceCardConfig {
  type: string;
  name?: string;
  entity: string;
  increase_temp: number;
  decrease_temp: number;
}

export const DEFAULT_CONFIG: GoogleClimateCardConfig = {
  type: "custom:google-dashboard-card",
  entity: "climate.thermo",
  increase_temp: 1,
  decrease_temp: 1,
};
