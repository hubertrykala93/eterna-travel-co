import { Component } from '@angular/core';
import { environment } from 'src/app/environments';

@Component({
  selector: 'app-home-testimonials',
  templateUrl: './home-testimonials.component.html',
  styleUrls: ['./home-testimonials.component.css']
})
export class HomeTestimonialsComponent {
  quoteIconUrl: string = environment.mediaUrl + 'icons/quote-icon.svg';
}
