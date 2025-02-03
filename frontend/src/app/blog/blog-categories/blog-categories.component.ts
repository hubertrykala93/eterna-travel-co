import { Component, Input } from '@angular/core';
import { CategoryCount } from 'src/app/services/blog.service';

export interface BlogCategory {
  name: string;
  count: number;
}

@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.css']
})
export class BlogCategoriesComponent {
  @Input() categories: CategoryCount[] = [];

}
