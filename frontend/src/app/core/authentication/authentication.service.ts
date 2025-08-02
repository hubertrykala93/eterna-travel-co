import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments';
import { FormOption, FormType } from '../core.model';
import ValidationUtils from '../utils/validation.utils';
import { AuthenticationControls, AuthenticationFormControlNames, UserDto, UserRequest } from './authentication.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly formBuilder = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  private readonly formOptions: FormOption[] = [
    {
      name: AuthenticationFormControlNames.EMAIL,
      label: 'Email Address',
      placeholder: 'Enter your email...',
      type: FormType.TEXT,
    },
    {
      name: AuthenticationFormControlNames.USERNAME,
      label: 'Username',
      placeholder: 'Enter your username...',
      type: FormType.TEXT,
    },
    {
      name: AuthenticationFormControlNames.PASSWORD,
      label: 'Password',
      placeholder: 'Enter your password...',
      type: FormType.PASSWORD,
    },
    {
      name: AuthenticationFormControlNames.REPASSWORD,
      label: 'Confirm Password',
      placeholder: 'Confirm your password...',
      type: FormType.PASSWORD,
    },
  ];

  public register(data: UserRequest): Observable<UserDto> {
    return this.http.post<UserDto>(`${environment.backendUrl}/api/v1/users`, data);
  }

  public getFormGroup(): FormGroup<AuthenticationControls> {
    return this.formBuilder.group<AuthenticationControls>(
      {
        email: new FormControl(null, ValidationUtils.EMAIL_VALIDATOR),
        username: new FormControl(null, ValidationUtils.USERNAME_VALIDATOR),
        password: new FormControl(null, ValidationUtils.PASSWORD_VALIDATOR),
        repassword: new FormControl(null),
      },
      {
        validators: ValidationUtils.passwordMatchValidator(),
      },
    );
  }

  public getFormOptions(): FormOption[] {
    return this.formOptions;
  }
}
