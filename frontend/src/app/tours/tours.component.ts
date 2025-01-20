import { environment } from './../environments';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent {
  budapestImageUrl: string = environment.mediaUrl + 'home/budapest.jpg';
}
