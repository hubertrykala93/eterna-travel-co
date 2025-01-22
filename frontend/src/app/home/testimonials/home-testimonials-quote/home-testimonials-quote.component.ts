import { Component } from '@angular/core';
import { environment } from 'src/app/environments';

@Component({
  selector: 'app-home-testimonials-quote',
  templateUrl: './home-testimonials-quote.component.html',
  styleUrls: ['./home-testimonials-quote.component.css']
})
export class HomeTestimonialsQuoteComponent {
  quoteIconUrl: string = environment.mediaUrl + 'about/quote-icon.svg';
}
