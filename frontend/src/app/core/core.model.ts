export interface AuditableDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum FormOptionType {
  TEXT = 'text',
  TEXTAREA = 'textarea',
}

export enum FormControlName {
  NAME = 'name',
  EMAIL = 'email',
  MESSAGE = 'message',
}

export interface FormOption {
  name: string;
  label: string;
  placeholder?: string | undefined;
  type?: string | undefined;
}

export interface NavigationButtonConfig {
  link: string;
  textKey: string;
  defaultText: string;
}
