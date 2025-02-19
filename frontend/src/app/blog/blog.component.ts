import { BlogService, Article, Image } from './../services/blog.service';
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

  keywordReceived: string | null = '';

  selectedImage: Image | null = null;

  constructor(
    private blogService: BlogService,
    private paginationService: PaginationService,
    private sharedBlogDataService: SharedBlogDataService
    ) { }

  ngOnInit(): void {
    this.sharedBlogDataService.searchKeywordSubject.next(null);
    this.showSelectedImage();
    this.searchedKeyword();

    this.paginationService.currentPage$.subscribe(page => {
      this.page = page;
      this.displayArticles();
    })
  }

  displayArticles(): void {
    this.blogService.getArticles(this.page, this.keywordReceived || undefined).subscribe({
      next: response => {
        this.articles = response.results;
        this.totalArticles = response.count;
        this.totalPages = Math.ceil(response.count / 4);
        this.paginationService.setTotalPages(this.totalPages);
      }
    })
  }

  showSelectedImage(): void {
    this.sharedBlogDataService.selectedImage$.subscribe(img => {
      this.selectedImage = img;
    })
  }

  closeSelectedImage(event: any): void {
    if (event) {
      this.sharedBlogDataService.setSelectedImage(null);
    }
  }

  searchedKeyword(): void {
    this.sharedBlogDataService.searchKeyword$.subscribe(keyword => {
      this.keywordReceived = keyword;
      this.paginationService.setCurrentPage(1)
      this.displayArticles();
    })
  }

}
