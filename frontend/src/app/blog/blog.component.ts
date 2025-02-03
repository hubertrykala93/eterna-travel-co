import { BlogService, Article } from './../services/blog.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.displayArticles();
  }

  displayArticles(): void {
    this.blogService.getArticles(this.page).subscribe({
      next: response => {
        this.articles = response.results;
        this.totalArticles = response.count;
        this.totalPages = Math.ceil(response.count / 4);
      }
    })
  }
}
