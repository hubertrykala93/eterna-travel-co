export interface AuditableDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FormOptions {
  name: string;
  label: string;
  placeholder?: string | undefined;
  type?: string | undefined;
}
