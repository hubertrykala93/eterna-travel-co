import { environment } from './../../environments';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, map } from 'rxjs';

interface EmailCheckResponse {
  emailExists: boolean
}

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  newsletterApiUrl = environment.apiBaseUrl + 'api/v1/newsletter'
  checkEmailExistsApiUrl = environment.apiBaseUrl + 'api/v1/check-email-exists';

  constructor(private http: HttpClient) { }

  createNewsletter(data: any): Observable<any> {
    return this.http.post(this.newsletterApiUrl, data);
  }
}
