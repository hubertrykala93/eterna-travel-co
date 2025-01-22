import { Tour } from './../../home/tours/home-tours/home-tours.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tours-card',
  templateUrl: './tours-card.component.html',
  styleUrls: ['./tours-card.component.css']
})
export class ToursCardComponent {
  @Input() tour!: Tour;
}
