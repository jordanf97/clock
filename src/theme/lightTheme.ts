import { light } from "@eva-design/eva";
import commonColours from "./themeCommon";

/**
 * Brand colour overrides for light mode
 */
export default {
  ...light,
  ...commonColours,
  "color-primary-100": "#E4E8FD",
  "color-primary-200": "#CBD1FC",
  "color-primary-300": "#AEB6F6",
  "color-primary-400": "#969FEC",
  "color-primary-500": "#747EE1", // DayPay primary
  "color-primary-600": "#545DC1",
  "color-primary-700": "#3A41A2",
  "color-primary-800": "#252A82",
  "color-primary-900": "#161A6C",
  "color-primary-transparent-100": "rgba(116, 126, 225, 0.08)",
  "color-primary-transparent-200": "rgba(116, 126, 225, 0.16)",
  "color-primary-transparent-300": "rgba(116, 126, 225, 0.24)",
  "color-primary-transparent-400": "rgba(116, 126, 225, 0.32)",
  "color-primary-transparent-500": "rgba(116, 126, 225, 0.4)",
  "color-primary-transparent-600": "rgba(116, 126, 225, 0.48)",

  "brand-action-100": "#D7FEEA",
  "brand-action-200": "#AFFDDD",
  "brand-action-300": "#86F9D5",
  "brand-action-400": "#67F4D5",
  "brand-action-500": "#37EDD6", // DayPay brand action
  "brand-action-600": "#28CBC6",
  "brand-action-700": "#1BA2AA",
  "brand-action-800": "#117789",
  "brand-action-900": "#0A5871",
  "custom-disabled": "#E0E0E0",

  "text-basic-color": "$custom-jet", // color-basic-100
  "text-control-color": "$custom-jet", // color-basic-100
  "custom-background": "$custom-ghost-white",
};
