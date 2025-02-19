import { BlogService } from 'src/app/services/blog.service';
import { Component, ValueProvider, OnInit } from '@angular/core';
import { RecentArticle } from '../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  latestArticles: RecentArticle[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getLatestTravelGuideArticles().subscribe({
      next: response => {
        this.latestArticles = response;
      }
    })

  }
}
