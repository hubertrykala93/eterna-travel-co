import { BlogService } from 'src/app/services/blog.service';
import { Article } from './../../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-articles-by-category',
    templateUrl: './articles-by-category.component.html',
    styleUrls: ['./articles-by-category.component.css'],
    standalone: false
})
export class ArticlesByCategoryComponent implements OnInit {
  articles: Article[] = [];
  page: number = 1;
  category: string = '';

  constructor(
    private blogService: BlogService,
    private router: ActivatedRoute
  ) {
    this.category = this.router.snapshot.params['slug'];
  }

  ngOnInit(): void {
    this.blogService.getArticles(this.page, undefined, this.category).subscribe({
      next: response => {
        this.articles = response.results;
      }
    })
  }

}
