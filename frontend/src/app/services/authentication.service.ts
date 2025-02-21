import { BehaviorSubject, Observable } from 'rxjs';
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

export interface AccountActivationData {
  email: string,
  token: string
}

export interface LoginData {
  email: string,
  password: string
}

export interface RegisterResponse {
  detail?: string,
  errors?: Errors[] | string,
  success?: boolean,
  code?: string,
}

export interface LoginResponseData {
  id: number,
  username: string,
  email: string
}

export interface LoginResponse {
  detail?: string,
  success?: boolean,
  error?: string,
  code?: string,
  access_token: string,
  refresh_token: string,
  data?: LoginResponseData
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authStatusSubject = new BehaviorSubject<true | false>(this.isAuthenticated());
  authStatus$ = this.authStatusSubject.asObservable();

  registerUserApiUrl: string = environment.apiBaseUrl + 'api/v1/accounts';
  accountActivationApiUrl: string = environment.apiBaseUrl + 'api/v1/account-activate';
  loginApiUrl: string = environment.apiBaseUrl + 'api/v1/login';

  constructor(private http: HttpClient) { }

  registerUser(data: RegisterUserData): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.registerUserApiUrl, data);
  }

  accountActivation(params: AccountActivationData): Observable<RegisterResponse> {
    return this.http.get<RegisterResponse>(this.accountActivationApiUrl + '?email=' + params['email'] + '&token=' + params['token']);
  }

  loginUser(data: LoginData): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginApiUrl, data)
  }

  setAuthenticationSession(refresh: string, access: string, id: number): void {
    sessionStorage.setItem('refreshToken', refresh)
    sessionStorage.setItem('accessToken', access)
    sessionStorage.setItem('id', id.toString());

    this.authStatusSubject.next(true);
  };

  isAuthenticated(): boolean {
    if (sessionStorage.getItem('accessToken')) {
      return true;
    } else {
      return false;
    };
  }

  logout(): void {
    if (sessionStorage.getItem('accessToken') && sessionStorage.getItem('refreshToken') && sessionStorage.getItem('id')) {
      sessionStorage.removeItem('accessToken');
      sessionStorage.removeItem('refreshToken');
      sessionStorage.removeItem('id');

      this.authStatusSubject.next(false);
    }
  }
}
