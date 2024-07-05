export const Currencies = [
  { value: "USD", label: "$ Dollar (US)", locale: "en-US" },
  { value: "AUD", label: "$ Dollar (AUS)", locale: "en-AU" },
  { value: "EUR", label: "€ Euro", locale: "fr-FR" },
  { value: "JPY", label: "¥ Yen", locale: "ja-JP" },
  { value: "GBP", label: "£ Pound", locale: "en-GB" },
];

export type Currency = (typeof Currencies)[0];
