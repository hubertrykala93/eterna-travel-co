import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments';
import { FormOptionType } from '../core.model';
import ValidationUtils from '../utils/validation.utils';
import { FormControlName } from './../core.model';
import { ContactCard, ContactDto, ContactFormOption, ContactRequest, ContactUsFormControls } from './contact-us.model';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  private readonly http = inject(HttpClient);
  private readonly formBuilder = inject(FormBuilder);

  public readonly contactCards: ContactCard[] = [
    {
      icon: 'assets/icons/contact-us/map-pin.svg',
      alt: 'Map pin icon',
      titleKey: 'core.location',
      defaultText: 'Location',
      description: '123 Madison Ave, New York',
    },
    {
      icon: 'assets/icons/contact-us/phone-call.svg',
      alt: 'Phone icon',
      titleKey: 'core.phone',
      defaultText: 'Phone',
      description: '+1 (212) 555-9875',
    },
    {
      icon: 'assets/icons/contact-us/mail.svg',
      alt: 'Mail icon',
      titleKey: 'core.email',
      defaultText: 'Email',
      description: 'info@eternatravelco.com',
    },
  ];

  public readonly contactFormOptions: ContactFormOption[] = [
    {
      formControlName: FormControlName.NAME,
      type: FormOptionType.TEXT,
      placeholderKey: 'contact-us.placeholder.name',
      defaultPlaceholderText: 'Your name...',
    },
    {
      formControlName: FormControlName.EMAIL,
      type: FormOptionType.TEXT,
      placeholderKey: 'contact-us.placeholder.email',
      defaultPlaceholderText: 'Your email...',
    },
    {
      formControlName: FormControlName.MESSAGE,
      type: FormOptionType.TEXTAREA,
      placeholderKey: 'contact-us.placeholder.write-something',
      defaultPlaceholderText: 'Write something...',
    },
  ];

  public sendMessage(data: ContactRequest): Observable<ContactDto> {
    return this.http.post<ContactDto>(`${environment.backendUrl}/api/v1/contact-us`, data);
  }

  public getContactUsForm(): FormGroup<ContactUsFormControls> {
    return this.formBuilder.group<ContactUsFormControls>({
      name: new FormControl<string | null>(null, ValidationUtils.NAME_VALIDATOR),
      email: new FormControl<string | null>(null, ValidationUtils.EMAIL_VALIDATOR),
      message: new FormControl<string | null>(null, ValidationUtils.MESSAGE_VALIDATOR),
    });
  }
}
