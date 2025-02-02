import { Component } from '@angular/core';

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

}
