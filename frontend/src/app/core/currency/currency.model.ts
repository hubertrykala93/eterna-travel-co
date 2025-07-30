export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  PLN = 'PLN',
  CHF = 'CHF',
}

export interface CurrencyDto {
  currency: Currency;
}
