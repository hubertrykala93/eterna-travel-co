import { CurrencyCode } from '../../../../core/currency/currency.model';
import { LanguageCode } from '../../../../core/language/language.model';

export interface DropdownButton {
  code: LanguageCode | CurrencyCode;
  defaultText: string;
  textKey?: string;
  src?: string;
  alt?: string;
}
