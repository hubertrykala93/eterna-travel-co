import { environment } from './../../environments';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  newsletterApiUrl = environment.apiBaseUrl + 'api/v1/newsletter'

  constructor(private http: HttpClient) { }

  createNewsletter(data: any): Observable<any> {
    return this.http.post(this.newsletterApiUrl, data);
  }
}
