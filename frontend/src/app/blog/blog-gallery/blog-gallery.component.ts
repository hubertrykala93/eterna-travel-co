import { Component } from '@angular/core';
import { environment } from 'src/app/environments';

export interface BlogGallery {
  imageUrl: string;
}

@Component({
  selector: 'app-blog-gallery',
  templateUrl: './blog-gallery.component.html',
  styleUrls: ['./blog-gallery.component.css']
})
export class BlogGalleryComponent {
  blogGallery: BlogGallery[] = [
    {
      imageUrl: environment.mediaUrl + 'blog/gallery-1.jpg'
    },
    {
      imageUrl: environment.mediaUrl + 'blog/gallery-2.jpg'
    },
    {
      imageUrl: environment.mediaUrl + 'blog/gallery-3.jpg'
    },
    {
      imageUrl: environment.mediaUrl + 'blog/gallery-4.jpg'
    },
    {
      imageUrl: environment.mediaUrl + 'blog/gallery-5.jpg'
    },
    {
      imageUrl: environment.mediaUrl + 'blog/gallery-6.jpg'
    },
    {
      imageUrl: environment.mediaUrl + 'blog/gallery-7.jpg'
    },
    {
      imageUrl: environment.mediaUrl + 'blog/gallery-8.jpg'
    },
    {
      imageUrl: environment.mediaUrl + 'blog/gallery-9.jpg'
    },
    {
      imageUrl: environment.mediaUrl + 'blog/gallery-10.jpg'
    },
    {
      imageUrl: environment.mediaUrl + 'blog/gallery-11.jpg'
    },
    {
      imageUrl: environment.mediaUrl + 'blog/gallery-12.jpg'
    },
  ]
}
