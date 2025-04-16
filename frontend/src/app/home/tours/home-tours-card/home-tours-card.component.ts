import { Component, Input } from '@angular/core';
import { Tour } from './../home-tours/home-tours.component';

@Component({
    selector: 'app-home-tours-card',
    templateUrl: './home-tours-card.component.html',
    styleUrls: ['./home-tours-card.component.css'],
    standalone: false
})
export class HomeToursCardComponent {
  @Input() tour!: Tour;
}
