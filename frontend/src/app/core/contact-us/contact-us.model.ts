import { FormControl } from '@angular/forms';

export interface ContactRequest {
  name: string | null;
  email: string | null;
  message: string | null;
}

export interface ContactResponse {
  status: string;
  message: string;
  error: string;
}

export interface ContactUsControls {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  message: FormControl<string | null>;
}
