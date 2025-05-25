import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments';
import ValidationUtils from '../utils/validation.utils';
import {
  AuthenticationControls,
  UserDto,
  UserRequest,
} from './authentication.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly http = inject(HttpClient);
  private readonly formBuilder = inject(FormBuilder);

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
}
