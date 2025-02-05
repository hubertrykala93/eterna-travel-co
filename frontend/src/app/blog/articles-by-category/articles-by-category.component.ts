import { CategoryCount, RecentArticle, Tag, Image, BlogService } from 'src/app/services/blog.service';
import { SharedBlogDataService } from './../../services/shared-blog-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-by-category',
  templateUrl: './articles-by-category.component.html',
  styleUrls: ['./articles-by-category.component.css']
})
export class ArticlesByCategoryComponent implements OnInit {
  categories: CategoryCount[] = [];
  recentArticles: RecentArticle[] = [];
  tags: Tag[] = [];
  gallery: Image[] = [];

  constructor(
    private sharedBlogDataService: SharedBlogDataService,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.fetchSidebarData();
  }

  fetchSidebarData(): void {
    this.blogService.getCategories().subscribe(categories => {
      this.sharedBlogDataService.setCategories(categories);
    })

    this.blogService.getRecentArticles().subscribe(recentArticles => {
      this.sharedBlogDataService.setRecentArticles(recentArticles);
    })

    this.blogService.getTags().subscribe(tags => {
      this.sharedBlogDataService.setTags(tags);
    })

    this.blogService.getGallery().subscribe(gallery => {
      this.sharedBlogDataService.setGallery(gallery);
    })
  }

  handleSelectedImage(img: Image): void {
    console.log(img)
  }

}
