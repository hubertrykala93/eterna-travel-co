import { Component, Input } from '@angular/core';
import { Feature } from '../about-features/about-features.component';

@Component({
  selector: 'app-about-features-card',
  templateUrl: './about-features-card.component.html',
  styleUrls: ['./about-features-card.component.css']
})
export class AboutFeaturesCardComponent {
  @Input() feature!: Feature;
}
