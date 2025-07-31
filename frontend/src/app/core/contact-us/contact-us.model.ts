import { FormControl } from '@angular/forms';

export interface ContactCard {
  icon: string;
  alt: string;
  titleKey: string;
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
