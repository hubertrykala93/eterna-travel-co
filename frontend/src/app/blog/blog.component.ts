import { Component } from '@angular/core';
import { environment } from '../environments';

export interface Article {
  imageUrl: string;
  date: Date;
  user: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  articles: Article[] = []
}
