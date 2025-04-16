import { Destination } from './../home-destinations/home-destinations.component';
import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-home-destinations-card',
    templateUrl: './home-destinations-card.component.html',
    styleUrls: ['./home-destinations-card.component.css'],
    standalone: false
})
export class HomeDestinationsCardComponent {
  @Input() destination!: Destination;
}
