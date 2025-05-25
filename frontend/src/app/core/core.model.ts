export interface AuditableDto {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FormOptions {
  control: string;
  label: string;
  placeholder: string;
}
