import { SharedBlogDataService } from './../../services/shared-blog-data.service';
import { CategoryCount, RecentArticle, Tag, Image } from 'src/app/services/blog.service';
import { Component, OnInit } from '@angular/core';

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
    private sharedBlogDataService: SharedBlogDataService
  ) { }

  ngOnInit(): void {
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

  selectedImage(img: Image): void {
    this.sharedBlogDataService.selectedImageSubject.next(img);
  }

  onChangeKeyword(): void {
    this.sharedBlogDataService.setSearchKeyword(this.keyword);
  }
}
