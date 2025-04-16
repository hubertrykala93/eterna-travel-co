import { AuthenticationService } from './../../services/authentication.service';
import { ArticleDetail, ArticleDetailResponse } from './../../services/blog.service';
import { BlogService } from 'src/app/services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-article-details',
    templateUrl: './article-details.component.html',
    styleUrls: ['./article-details.component.css'],
    standalone: false
})

export class ArticleDetailsComponent implements OnInit {
  isLoggedIn: boolean = false;

  article?: ArticleDetail;
  nextArticle?: ArticleDetail | null;
  previousArticle?: ArticleDetail | null;
  categorySlug: string = '';
  articleSlug: string = '';
  categoryName: string = '';

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private authService: AuthenticationService
    ) {
      this.authService.authStatus$.subscribe(status => {
        this.isLoggedIn = status;
      })
    }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categorySlug = params['categorySlug'],
      this.articleSlug = params['articleSlug'];
      this.categoryName = this.categorySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

      this.displayArticle()
    })
  }

  displayArticle(): void {
    this.blogService.getArticle(this.categorySlug, this.articleSlug).subscribe({
      next: response => {
        this.article = response.article;
        this.nextArticle = response.nextArticle;
        this.previousArticle = response.previousArticle;
      }
    })
  }

}
