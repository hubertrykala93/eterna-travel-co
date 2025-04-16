import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/app/environments';

@Component({
    selector: 'app-testimonials-image-section',
    templateUrl: './testimonials-image-section.component.html',
    styleUrls: ['./testimonials-image-section.component.css'],
    standalone: false
})
export class TestimonialsImageSectionComponent {
  @Input() sectionType!: string;

  testimonialsImageUrl1: string = '';
  testimonialsImageUrl2: string = '';
  testimonialsImageUrl3: string = '';
  testimonialsImageAlt1: string = '';
  testimonialsImageAlt2: string = '';
  testimonialsImageAlt3: string = '';

  ngOnInit(): void {
    if (this.sectionType === 'home') {
      this.testimonialsImageUrl1 = environment.mediaUrl + 'home/testimonials-1.jpg';
      this.testimonialsImageUrl2 = environment.mediaUrl + 'home/testimonials-2.jpg';
      this.testimonialsImageUrl3 = environment.mediaUrl + 'home/testimonials-3.jpg';
      this.testimonialsImageAlt1 = 'A Thai raft floating among hills in a bay';
      this.testimonialsImageAlt2 = 'Frozen glaciers in Antarctica and the sea';
      this.testimonialsImageAlt3 = 'Two alpacas against the backdrop of Chilean mountains';
    } else if (this.sectionType === 'about') {
      this.testimonialsImageUrl1 = environment.mediaUrl + 'about/testimonials-1.jpg';
      this.testimonialsImageUrl2 = environment.mediaUrl + 'about/testimonials-2.jpg';
      this.testimonialsImageUrl3 = environment.mediaUrl + 'about/testimonials-3.jpg';
      this.testimonialsImageAlt1 = 'Three young smiling women talking to each other';
      this.testimonialsImageAlt2 = 'Two smiling women in sunglasses on a paradise beach';
      this.testimonialsImageAlt3 = 'Two smiling young women sitting on the beach';
    }
  }
}
