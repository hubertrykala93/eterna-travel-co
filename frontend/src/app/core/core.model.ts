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

export interface FormOptions {
  name: string;
  label: string;
  placeholder?: string | undefined;
  type?: string | undefined;
}
