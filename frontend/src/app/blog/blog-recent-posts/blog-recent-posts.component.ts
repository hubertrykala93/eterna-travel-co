import { Component, Input } from '@angular/core';
import { RecentArticle } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-recent-posts',
  templateUrl: './blog-recent-posts.component.html',
  styleUrls: ['./blog-recent-posts.component.css']
})
export class BlogRecentPostsComponent {
  @Input() recentArticles: RecentArticle[] = [];
}
