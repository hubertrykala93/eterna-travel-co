import { SharedBlogDataService } from './../../services/shared-blog-data.service';
import { CategoryCount, RecentArticle, Tag, Image, BlogService } from 'src/app/services/blog.service';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.css']
})
export class BlogSidebarComponent implements OnInit {
  keyword: string | null = null;

  categories: CategoryCount[] = [];
  recentArticles: RecentArticle[] = [];
  tags: Tag[] = [];
  gallery: Image[] = [];

  constructor(
    private sharedBlogDataService: SharedBlogDataService,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.displayCategories();
    this.displayRecentArticles();
    this.displayTags();
    this.displayGallery();
  }

  displayCategories(): void {
    this.blogService.getCategories().subscribe({
      next: response => {
        this.sharedBlogDataService.setCategories(response);
        this.sharedBlogDataService.categories$.subscribe(categories => {
          this.categories = categories;
        })
      }
    })
  }

  displayRecentArticles(): void {
    this.blogService.getRecentArticles().subscribe({
      next: response => {
        this.sharedBlogDataService.setRecentArticles(response);
        this.sharedBlogDataService.recentArticles$.subscribe(recentArticles => {
          this.recentArticles = recentArticles;
        })
      }
    })
  }

  displayTags(): void {
    this.blogService.getTags().subscribe({
      next: response => {
        this.sharedBlogDataService.setTags(response);
        this.sharedBlogDataService.tags$.subscribe(tags => {
          this.tags = tags;
        })
      }
    })
  }

  displayGallery(): void {
    this.blogService.getGallery().subscribe({
      next: response => {
        this.sharedBlogDataService.setGallery(response);
        this.sharedBlogDataService.gallery$.subscribe(gallery => {
          this.gallery = gallery;
        })
      }
    })
  }

  selectedImage(img: Image): void {
    this.sharedBlogDataService.selectedImageSubject.next(img);
  }

  onChangeKeyword(): void {
    this.sharedBlogDataService.setSearchKeyword(this.keyword);
  }
}
