import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/app/environments';

@Component({
  selector: 'app-testimonials-image-section',
  templateUrl: './testimonials-image-section.component.html',
  styleUrls: ['./testimonials-image-section.component.css']
})
export class TestimonialsImageSectionComponent {
  @Input() sectionType!: string;

  testimonialsImageUrl1: string = '';
  testimonialsImageUrl2: string = '';
  testimonialsImageUrl3: string = '';

  ngOnInit(): void {
    if (this.sectionType === 'home') {
      this.testimonialsImageUrl1 = environment.mediaUrl + 'home/testimonials1.jpg';
      this.testimonialsImageUrl2 = environment.mediaUrl + 'home/testimonials2.jpg';
      this.testimonialsImageUrl3 = environment.mediaUrl + 'home/testimonials3.jpg';
    } else if (this.sectionType === 'about') {
      this.testimonialsImageUrl1 = environment.mediaUrl + 'about/testimonial_1.jpg';
      this.testimonialsImageUrl2 = environment.mediaUrl + 'about/testimonial_2.jpg';
      this.testimonialsImageUrl3 = environment.mediaUrl + 'about/testimonial_3.jpg';
    }
  }
}
