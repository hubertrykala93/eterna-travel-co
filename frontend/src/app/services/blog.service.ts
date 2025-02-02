import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  articlesApiUrl: string = environment.apiBaseUrl + 'api/v1/articles';

  constructor(private http: HttpClient) { }

  getArticles(keyword?: string, count?: number): Observable<any> {
    return this.http.get<any>(this.articlesApiUrl);
  }
}
