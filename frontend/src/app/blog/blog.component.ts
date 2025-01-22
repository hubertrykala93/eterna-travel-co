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
  articles: Article[] = [
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
    },
    {
      imageUrl: environment.mediaUrl + 'blog/article-4.jpg',
      date: new Date('Jul, 13, 2025'),
      user: 'Admin',
      title: 'Top 10 Tropical Beaches to Visit in Thailand',
      content: 'Thailand is famous for its tropical beaches, with turquoise waters, white sand, and lush surroundings. From Phuket to Koh Samui, discover paradise on earth...'
    },
    {
      imageUrl: environment.mediaUrl + 'blog/article-5.jpg',
      date: new Date('Jul, 13, 2025'),
      user: 'Admin',
      title: 'A Blend of Tradition and Modernity',
      content: 'Japan offers an unforgettable experience, from the serene beauty of Kyoto’s temples to the bustling neon lights of Tokyo. Explore its rich culture and cuisine...'
    }
  ]
}
