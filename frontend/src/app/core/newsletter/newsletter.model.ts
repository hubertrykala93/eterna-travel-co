import { FormControl } from '@angular/forms';

export interface NewsletterRequest {
  email: string | null;
}

export interface NewsletterResponse {
  status: string;
  message: string;
  error: string;
}

export interface NewsletterControls {
  email: FormControl<string | null>;
}
