export enum LanguageCode {
  PL = 'pl',
  EN = 'en',
}
export enum LanguageName {
  POLISH = 'Polish',
  ENGLISH = 'English (US)',
}

export interface LanguageDto {
  language: LanguageCode;
}

export interface LanguageNavigationButton {
  src: string;
  alt: string;
  code: LanguageCode;
  textKey: string;
  defaultText: LanguageName;
}
