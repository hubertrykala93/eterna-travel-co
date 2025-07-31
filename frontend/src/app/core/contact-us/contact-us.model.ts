import { FormControl } from '@angular/forms';
import { FormControlName, FormOptionType } from '../core.model';

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
  formControlName: FormControlName;
  type: FormOptionType;
  placeholderKey: string;
  defaultPlaceholderText: string;
}
