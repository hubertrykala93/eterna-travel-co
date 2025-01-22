import { Component } from '@angular/core';

export interface Tag {
  name: string;
}

@Component({
  selector: 'app-blog-tags',
  templateUrl: './blog-tags.component.html',
  styleUrls: ['./blog-tags.component.css']
})
export class BlogTagsComponent {
  blogTags: Tag[] = [
    {
      name: 'Activity'
    },
    {
      name: 'Car Rental'
    },
    {
      name: 'City'
    },
    {
      name: 'Tour'
    },
    {
      name: 'Destination'
    },
    {
      name: 'Museums'
    },
    {
      name: 'Sports'
    },
    {
      name: 'Fishing'
    },
    {
      name: 'Cooking'
    },
    {
      name: 'Yacht'
    },
    {
      name: 'Luxury'
    },
    {
      name: 'Mountain'
    }
  ]
}
