import { SharedBlogDataService } from './../../services/shared-blog-data.service';
import { CategoryCount, RecentArticle, Tag, Image } from 'src/app/services/blog.service';
import { Component, OnInit, Output, EventEmitter, ValueProvider } from '@angular/core';

@Component({
  selector: 'app-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.css']
})
export class BlogSidebarComponent implements OnInit {
  categories: CategoryCount[] = [];
  recentArticles: RecentArticle[] = [];
  tags: Tag[] = [];
  gallery: Image[] = [];

  @Output() imageSelected: EventEmitter<Image> = new EventEmitter<Image>();
  @Output() keywordEmitted: EventEmitter<string> = new EventEmitter<string>();

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

  handleSelectedImage(img: Image): void {
    this.imageSelected.emit(img);
  }

  handleKeyword(keyword: string): void {
    this.keywordEmitted.emit(keyword);
  }
}
