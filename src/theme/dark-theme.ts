import { dark } from "@eva-design/eva";
import commonColours from "./theme-common";

/**
 * Brand colour overrides for dark mode
 */
export default {
  ...dark,
  ...commonColours,
  "color-primary-100": "#D7FEEA",
  "color-primary-200": "#AFFDDD",
  "color-primary-300": "#86F9D5",
  "color-primary-400": "#67F4D5",
  "color-primary-500": "#37EDD6", // DayPay primary
  "color-primary-600": "#28CBC6",
  "color-primary-700": "#1BA2AA",
  "color-primary-800": "#117789",
  "color-primary-900": "#0A5871",
  "color-primary-transparent-100": "rgba(55, 237, 214, 0.08)",
  "color-primary-transparent-200": "rgba(55, 237, 214, 0.16)",
  "color-primary-transparent-300": "rgba(55, 237, 214, 0.24)",
  "color-primary-transparent-400": "rgba(55, 237, 214, 0.32)",
  "color-primary-transparent-500": "rgba(55, 237, 214, 0.4)",
  "color-primary-transparent-600": "rgba(55, 237, 214, 0.48)",

  "brand-action-100": "#E4E8FD",
  "brand-action-200": "#CBD1FC",
  "brand-action-300": "#AEB6F6",
  "brand-action-400": "#969FEC",
  "brand-action-500": "#747EE1", // DayPay primary
  "brand-action-600": "#545DC1",
  "brand-action-700": "#3A41A2",
  "brand-action-800": "#252A82",
  "brand-action-900": "#161A6C",
  "custom-disabled": "#474747",

  "text-basic-color": "$custom-ghost-white", // color-basic-100
  "text-control-color": "$custom-ghost-white", // color-basic-100
  "custom-background": "$custom-jet",
};
