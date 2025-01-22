import { Article } from './../blog.component';
import { Component } from '@angular/core';
import { environment } from 'src/app/environments';

@Component({
  selector: 'app-blog-recent-posts',
  templateUrl: './blog-recent-posts.component.html',
  styleUrls: ['./blog-recent-posts.component.css']
})
export class BlogRecentPostsComponent {
  blog1: string = environment.mediaUrl + 'blog/blog1.jpg';

  recentPosts: Article[] = [
    {
      imageUrl: environment.mediaUrl + 'blog/article-1.jpg',
      date: new Date('Jul, 13, 2025'),
      user: 'Admin',
      title: 'Exploring the Wonders of Argentina',
      content: 'Argentina, a land of diverse landscapes and vibrant culture, offers breathtaking sights from the majestic Andes to the bustling streets of Buenos Aires...'
    },
    {
      imageUrl: environment.mediaUrl + 'blog/article-2.jpg',
      date: new Date('Jul, 13, 2025'),
      user: 'Admin',
      title: 'Wildlife and Ancient Wonders',
      content: 'Africa is a continent of unparalleled beauty, home to awe-inspiring wildlife safaris, the ancient pyramids of Egypt, and the rich traditions of its people...'
    },
    {
      imageUrl: environment.mediaUrl + 'blog/article-3.jpg',
      date: new Date('Jul, 13, 2025'),
      user: 'Admin',
      title: 'The Ultimate Guide to the Big Apple',
      content: 'New York City, the city that never sleeps, is a hub of culture, cuisine, and iconic landmarks like Times Square, Central Park, and the Statue of Liberty...'
    }
  ]
}
