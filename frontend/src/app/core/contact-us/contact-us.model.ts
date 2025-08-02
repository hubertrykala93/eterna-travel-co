import { FormControl } from '@angular/forms';
import { FormType } from '../core.model';

export interface ContactCard {
  icon: string;
  alt: string;
  titleKey: string;
  defaultText: string;
  description: string;
}

export interface ContactRequest {
  name: string | null;
  email: string | null;
  message: string | null;
}

export interface ContactDto {
  status: string;
  message: string;
  error: string;
}

export interface ContactUsFormControls {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  message: FormControl<string | null>;
}

export interface ContactFormOption {
  formControlName: string;
  type: FormType;
  placeholderKey: string;
  defaultPlaceholderText: string;
}
