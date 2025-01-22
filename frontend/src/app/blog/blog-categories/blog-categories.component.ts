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
  blogCategories: BlogCategory[] = [
    {
      name: 'Company News',
      count: 1
    },
    {
      name: 'Lifestyle',
      count: 3
    },
    {
      name: 'Social Media',
      count: 4
    },
    {
      name: 'Travel Guide',
      count: 1
    },
    {
      name: 'Tips & Tricks',
      count: 5
    },
  ]
}
