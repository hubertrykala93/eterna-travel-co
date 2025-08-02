export interface AuditableDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum FormType {
  TEXT = 'text',
  TEXTAREA = 'textarea',
  PASSWORD = 'password',
}

export interface FormOption {
  name: string;
  label: string;
  placeholder?: string | undefined;
  type?: FormType;
}

export interface NavigationButtonConfig {
  link: string;
  textKey: string;
  defaultText: string;
}
