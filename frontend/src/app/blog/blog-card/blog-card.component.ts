import { Component, Input } from '@angular/core';
import { Article } from '../blog.component';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent {
  @Input() article!: Article
}
