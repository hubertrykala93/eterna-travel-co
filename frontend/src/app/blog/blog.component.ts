import { PageTitleComponent } from './../page-title/page-title.component';
import { BlogService, Article, CategoryCount, RecentArticle, Tag, Image } from './../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../services/pagination.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {
  articles: Article[] = [];
  totalArticles: number = 0;
  totalPages: number = 0;
  page: number = 1;

  keywordReceived: string = '';

  categories: CategoryCount[] = [];
  recentArticles: RecentArticle[] = [];
  tags: Tag[] = [];
  gallery: Image[] = [];

  selectedImage: Image | null = null;

  constructor(private blogService: BlogService, private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.paginationService.currentPage$.subscribe(page => {
      this.page = page;
      this.displayArticles();
    })

    this.displayArticles();
    this.displayCategories();
    this.displayRecentArticles();
    this.displayTags();
    this.displayGallery();
  }

  displayArticles(): void {
    this.blogService.getArticles(this.page, this.keywordReceived || undefined).subscribe({
      next: response => {
        this.articles = response.results;
        this.totalArticles = response.count;
        this.totalPages = Math.ceil(response.count / 4);
        this.paginationService.setTotalPages(Math.ceil(response.count / 4));
      }
    })
  }

  handleEmittedKeyword(keyword: string): void {
    this.keywordReceived = keyword;
    this.paginationService.setCurrentPage(1);
    this.displayArticles();
  }

  displayCategories(): void {
    this.blogService.getCategories().subscribe({
      next: response => {
        this.categories = response;
      }
    })
  }

  displayRecentArticles(): void {
    this.blogService.getRecentArticles().subscribe({
      next: response => {
        this.recentArticles = response;
      }
    })
  }

  displayTags(): void {
    this.blogService.getTags().subscribe({
      next: response => {
        this.tags = response;
      }
    })
  }

  displayGallery(): void {
    this.blogService.getGallery().subscribe({
      next: response => {
        this.gallery = response;
      }
    })
  }

  handleSelectedImage(img: Image): void {
    this.selectedImage = img;
  }

  closeImage(event: any): void {
    if (event) {
      this.selectedImage = null;
    }
  }
}
