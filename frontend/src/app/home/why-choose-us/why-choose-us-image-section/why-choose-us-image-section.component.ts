import { Component, Input, OnInit } from '@angular/core';
import { environment } from './../../../environments';

@Component({
  selector: 'app-why-choose-us-image-section',
  templateUrl: './why-choose-us-image-section.component.html',
  styleUrls: ['./why-choose-us-image-section.component.css']
})

export class WhyChooseUsImageSectionComponent {
  @Input() sectionType!: string;

  whyChooseUsImageUrl1: string = '';
  whyChooseUsImageUrl2: string = '';

  ngOnInit() {
    if (this.sectionType === 'home') {
      this.whyChooseUsImageUrl1 = environment.mediaUrl + 'home/why-choose-us-image-1.jpg';
      this.whyChooseUsImageUrl2 = environment.mediaUrl + 'home/why-choose-us-image-2.jpg';
    } else if (this.sectionType === 'about') {
      this.whyChooseUsImageUrl1 = environment.mediaUrl + 'about/why-choose-us-image-2.jpg';
      this.whyChooseUsImageUrl2 = environment.mediaUrl + 'about/why-choose-us-image-1.jpg';
    }
  }
}
