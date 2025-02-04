import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments';

export interface Tag {
  name: string,
  slug: string
}

export interface CategoryCount {
  name: string,
  slug: string,
  articlesCount: number
}

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

export interface RecentArticle {
  datePosted: Date,
  user: string,
  title: string,
  slug: string,
  image: Image,
  category: Category
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
  categoryCountApiUrl: string = environment.apiBaseUrl + 'api/v1/articles/category-count';
  recentArticlesApiUrl: string = environment.apiBaseUrl + 'api/v1/articles/recent-articles';
  tagsApiUrl: string = environment.apiBaseUrl + 'api/v1/articles/tags';
  galleryApiUrl: string = environment.apiBaseUrl + 'api/v1/articles/gallery';

  constructor(private http: HttpClient) { }

  getArticles(page: number, keyword?: string): Observable<PaginatedResponse> {
    if (keyword) {
      return this.http.get<PaginatedResponse>(this.articlesApiUrl + `?page=${page}&keyword=${keyword}`)
    } else {
      return this.http.get<PaginatedResponse>(this.articlesApiUrl + `?page=${page}`);
    }
  }

  getCategories(): Observable<CategoryCount[]> {
    return this.http.get<CategoryCount[]>(this.categoryCountApiUrl);
  }

  getRecentArticles(): Observable<RecentArticle[]> {
    return this.http.get<RecentArticle[]>(this.recentArticlesApiUrl);
  }

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.tagsApiUrl);
  }

  getGallery(): Observable<Image[]> {
    return this.http.get<Image[]>(this.galleryApiUrl);
  }
}
