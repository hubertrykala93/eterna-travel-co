import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments';
import { FormOptions } from '../core.model';
import ValidationUtils from '../utils/validation.utils';
import {
  AuthenticationControls,
  AuthenticationFormControlNames,
  UserDto,
  UserRequest,
} from './authentication.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly formBuilder = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  private readonly formOptions: FormOptions[] = [
    {
      name: AuthenticationFormControlNames.EMAIL,
      label: 'Email Address',
      placeholder: 'Enter your email...',
      type: 'text',
    },
    {
      name: AuthenticationFormControlNames.USERNAME,
      label: 'Username',
      placeholder: 'Enter your username...',
      type: 'text',
    },
    {
      name: AuthenticationFormControlNames.PASSWORD,
      label: 'Password',
      placeholder: 'Enter your password...',
      type: 'password',
    },
    {
      name: AuthenticationFormControlNames.REPASSWORD,
      label: 'Confirm Password',
      placeholder: 'Confirm your password...',
      type: 'password',
    },
  ];

  public register(data: UserRequest): Observable<UserDto> {
    return this.http.post<UserDto>(
      `${environment.backendUrl}/api/v1/users`,
      data
    );
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
      }
    );
  }

  public getFormOptions(): FormOptions[] {
    return this.formOptions;
  }
}
