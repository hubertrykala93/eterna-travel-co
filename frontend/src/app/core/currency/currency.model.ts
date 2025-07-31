export enum CurrencyCode {
  USD = 'USD',
  EUR = 'EUR',
  PLN = 'PLN',
  CHF = 'CHF',
}

export interface CurrencyDto {
  currency: CurrencyCode;
}

export interface CurrencyNavigationButton {
  code: CurrencyCode;
  defaultText: CurrencyCode;
}
