import { BlogService, Article, CategoryCount } from './../services/blog.service';
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

  constructor(private blogService: BlogService, private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.paginationService.currentPage$.subscribe(page => {
      this.page = page;
      this.displayArticles();
    })

    this.displayArticles();
    this.displayCategories();
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
}
