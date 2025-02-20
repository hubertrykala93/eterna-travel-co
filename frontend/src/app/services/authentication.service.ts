import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments';


export interface Errors {
  error: string
}

export interface RegisterUserData {
  username: string,
  email: string,
  password: string,
  repassword: string
}

export interface RegisterResponse {
  detail?: string,
  errors?: Errors[] | string,
  success?: boolean,
  code?: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  registerUserApiUrl: string = environment.apiBaseUrl + 'api/v1/register';
  accountActivationApiUrl: string = environment.apiBaseUrl + 'api/v1/account-activate';

  constructor(private http: HttpClient) { }

  registerUser(data: RegisterUserData): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.registerUserApiUrl, data);
  }

  accountActivation(): Observable<any> {
    return this.http.get(this.accountActivationApiUrl);
  }
}
