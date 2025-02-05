import { CategoryCount, RecentArticle, Tag, Image } from 'src/app/services/blog.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedBlogDataService {
  categoriesSubject: BehaviorSubject<CategoryCount[]> = new BehaviorSubject<CategoryCount[]>([]);
  categories$ = this.categoriesSubject.asObservable();

  recentArticlesSubject: BehaviorSubject<RecentArticle[]> = new BehaviorSubject<RecentArticle[]>([]);
  recentArticles$ = this.recentArticlesSubject.asObservable();

  tagsSubject: BehaviorSubject<Tag[]> = new BehaviorSubject<Tag[]>([]);
  tags$ = this.tagsSubject.asObservable();

  gallerySubject: BehaviorSubject<Image[]> = new BehaviorSubject<Image[]>([]);
  gallery$ = this.gallerySubject.asObservable();

  selectedImageSubject: BehaviorSubject<Image | null> = new BehaviorSubject<Image | null>(null);
  selectedImage$ = this.selectedImageSubject.asObservable();

  searchKeywordSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  searchKeyword$ = this.searchKeywordSubject.asObservable();

  setCategories(categories: CategoryCount[]): void {
    this.categoriesSubject.next(categories);
  }

  setRecentArticles(recentArticles: RecentArticle[]): void {
    this.recentArticlesSubject.next(recentArticles);
  }

  setTags(tags: Tag[]): void {
    this.tagsSubject.next(tags);
  }

  setGallery(gallery: Image[]): void {
    this.gallerySubject.next(gallery);
  }

  setSelectedImage(selectedImage: Image | null): void {
    this.selectedImageSubject.next(selectedImage);
  }

  setSearchKeyword(searchKeyword: string | null): void {
    this.searchKeywordSubject.next(searchKeyword);
  }
}
