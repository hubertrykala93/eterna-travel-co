import { Tag } from './../../services/blog.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-tags',
  templateUrl: './blog-tags.component.html',
  styleUrls: ['./blog-tags.component.css']
})
export class BlogTagsComponent {
  @Input() tags: Tag[] = [];
}
