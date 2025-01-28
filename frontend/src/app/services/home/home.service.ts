import { environment } from './../../environments';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  newsletterApiUrl = environment.apiBaseUrl + 'api/v1/newsletter';
  newsletterActivationApiUrl = environment.apiBaseUrl + 'api/v1/newsletter/activate';

  constructor(private http: HttpClient) { }

  createNewsletter(data: any): Observable<any> {
    return this.http.post(this.newsletterApiUrl, data);
  }

  activateNewsletter(data: any): Observable<any> {
    return this.http.get(this.newsletterActivationApiUrl + `?email=${data.email}&token=${data.token}`);
  }
}
