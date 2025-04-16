import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-home-header-section',
    templateUrl: './home-header-section.component.html',
    styleUrls: ['./home-header-section.component.css'],
    standalone: false
})
export class HomeHeaderSectionComponent {
  @Input() headerTitle!: string;
  @Input() headerSubtitle!: string;
  @Input() alignment: 'left' | 'center' | 'right' = 'center';
}
