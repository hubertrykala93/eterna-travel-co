import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Article, BlogService } from 'src/app/services/blog.service';
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-articles-by-tag',
  templateUrl: './articles-by-tag.component.html',
  styleUrls: ['./articles-by-tag.component.css']
})
export class ArticlesByTagComponent implements OnInit {
  articles: Article[] = [];
  tag: string = '';
  page: number = 1;
  totalArticles: number = 0;
  totalPages: number = 0;

  constructor(
    private blogService: BlogService,
    private router: ActivatedRoute,
    private paginationService: PaginationService
  ) {
    this.tag = this.router.snapshot.params['slug']
   }

  ngOnInit(): void {
    this.paginationService.setCurrentPage(this.page);

    this.paginationService.currentPage$.subscribe(page => {
      this.page = page;

      this.displayArticlesByTag();
    })

  }

  displayArticlesByTag(): void {
    this.blogService.getArticles(this.page, undefined, undefined, this.tag).subscribe({
      next: response => {
        this.articles = response.results;
        this.totalArticles = response.count;
        this.totalPages = Math.ceil(response.count / 9);
        this.paginationService.setTotalPages(this.totalPages);
      }
    })
  }

}
