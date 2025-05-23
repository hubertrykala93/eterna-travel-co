import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments';
import ValidationUtils from '../utils/validation.utils';
import {
  ContactRequest,
  ContactResponse,
  ContactUsControls,
} from './contact-us.model';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  private readonly http = inject(HttpClient);
  private readonly formBuilder = inject(FormBuilder);

  public sendMessage(data: ContactRequest): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(
      `${environment.backendUrl}/api/v1/contact-us`,
      data
    );
  }

  public getContactUsForm(): FormGroup<ContactUsControls> {
    return this.formBuilder.group<ContactUsControls>({
      name: new FormControl<string | null>(
        null,
        ValidationUtils.NAME_VALIDATOR
      ),
      email: new FormControl<string | null>(
        null,
        ValidationUtils.EMAIL_VALIDATOR
      ),
      message: new FormControl<string | null>(
        null,
        ValidationUtils.MESSAGE_VALIDATOR
      ),
    });
  }
}
