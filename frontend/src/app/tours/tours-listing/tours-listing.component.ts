import { environment } from './../../environments';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tours-listing',
  templateUrl: './tours-listing.component.html',
  styleUrls: ['./tours-listing.component.css']
})
export class ToursListingComponent {
  budapestImageUrl: string = environment.mediaUrl + 'home/budapest.jpg';
}
