import { Image } from './../../services/blog.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface BlogGallery {
  imageUrl: string;
}

@Component({
  selector: 'app-blog-gallery',
  templateUrl: './blog-gallery.component.html',
  styleUrls: ['./blog-gallery.component.css']
})
export class BlogGalleryComponent {
  @Input() gallery: Image[] = [];
  @Output() selectedImage: EventEmitter<Image> = new EventEmitter();

  emitSelectedImage(img: Image): void {
    this.selectedImage.emit(img);
  }
}


