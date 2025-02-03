import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments';

export interface PaginatedResponse {
  count: number,
  next: string | null,
  previous: string | null,
  results: Article[]
}

export interface Image {
  image: string,
  alt: string
}

export interface Category {
  name: string,
  slug: string
}

export interface Article {
  datePosted: Date,
  image: Image,
  user: string,
  title: string,
  slug: string,
  content: string,
  category: Category
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  articlesApiUrl: string = environment.apiBaseUrl + 'api/v1/articles';

  constructor(private http: HttpClient) { }

  getArticles(page: number, keyword?: string): Observable<PaginatedResponse> {
    if (keyword) {
      return this.http.get<PaginatedResponse>(this.articlesApiUrl + `?page=${page}&keyword=${keyword}`)
    } else {
      return this.http.get<PaginatedResponse>(this.articlesApiUrl + `?page=${page}`);
    }
  }
}
