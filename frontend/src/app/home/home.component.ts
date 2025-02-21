import { AuthenticationService } from './../services/authentication.service';
import { BlogService } from 'src/app/services/blog.service';
import { Component, OnInit } from '@angular/core';
import { RecentArticle } from '../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  latestArticles: RecentArticle[] = [];

  constructor(private blogService: BlogService, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.blogService.getLatestTravelGuideArticles().subscribe({
      next: response => {
        this.latestArticles = response;
      }
    })

  }
}
