export function toBeSetted(stateObj: any, temperature: any) {
  return stateObj.state === "heat_cool" && temperature < 8;
}
