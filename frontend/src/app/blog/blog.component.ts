import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BlogService, Article, CategoryCount, RecentArticle, Tag, Image } from './../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../services/pagination.service';
import { SharedBlogDataService } from '../services/shared-blog-data.service';

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

  selectedImage: Image | null = null

  constructor(
    private blogService: BlogService,
    private paginationService: PaginationService,
    private sharedBlogDataService: SharedBlogDataService
    ) { }

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

    this.sharedBlogDataService.categories$.subscribe(categories => {
      this.categories = categories;
    })

    this.sharedBlogDataService.recentArticles$.subscribe(recentArticles => {
      this.recentArticles = recentArticles;
    })

    this.sharedBlogDataService.tags$.subscribe(tags => {
      this.tags = tags;
    })

    this.sharedBlogDataService.gallery$.subscribe(gallery => {
      this.gallery = gallery;
    })
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

  handleKeyword(keyword: string): void {
    this.keywordReceived = keyword;
    this.paginationService.setCurrentPage(1);
    this.displayArticles();
  }

  displayCategories(): void {
    this.blogService.getCategories().subscribe({
      next: response => {
        this.sharedBlogDataService.setCategories(response);
      }
    })
  }

  displayRecentArticles(): void {
    this.blogService.getRecentArticles().subscribe({
      next: response => {
        this.sharedBlogDataService.setRecentArticles(response);
      }
    })
  }

  displayTags(): void {
    this.blogService.getTags().subscribe({
      next: response => {
        this.sharedBlogDataService.setTags(response);
      }
    })
  }

  displayGallery(): void {
    this.blogService.getGallery().subscribe({
      next: response => {
        this.sharedBlogDataService.setGallery(response);
      }
    })
  }

  resetAndFetchArticles(): void {
    this.keywordReceived = '';
    this.page = 1;
    this.displayArticles();
  }
}
