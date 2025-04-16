import { Component, Input, OnInit } from '@angular/core';
import { environment } from './../../../environments';

@Component({
    selector: 'app-why-choose-us-image-section',
    templateUrl: './why-choose-us-image-section.component.html',
    styleUrls: ['./why-choose-us-image-section.component.css'],
    standalone: false
})

export class WhyChooseUsImageSectionComponent {
  @Input() sectionType!: string;

  whyChooseUsImageUrl1: string = '';
  whyChooseUsImageUrl2: string = '';
  whyChooseUsImageAlt1: string = '';
  whyChooseUsImageAlt2: string = '';

  ngOnInit() {
    if (this.sectionType === 'home') {
      this.whyChooseUsImageUrl1 = environment.mediaUrl + 'home/why-choose-us-1.jpg';
      this.whyChooseUsImageUrl2 = environment.mediaUrl + 'home/why-choose-us-2.jpg';
      this.whyChooseUsImageAlt1 = 'A close-up view of the Empire State Building in Manhattan';
      this.whyChooseUsImageAlt2 = 'Aerial view of a tropical beach and sea';
    } else if (this.sectionType === 'about') {
      this.whyChooseUsImageUrl1 = environment.mediaUrl + 'about/about-us-1.jpg';
      this.whyChooseUsImageUrl2 = environment.mediaUrl + 'about/about-us-2.jpg';
      this.whyChooseUsImageAlt1 = 'A woman standing on a wooden raft by a paradise beach';
      this.whyChooseUsImageAlt2 = 'Two smiling women wearing sunglasses sitting on a wooden raft by a tropical beach';
    }
  }
}
