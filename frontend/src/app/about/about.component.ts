import { environment } from './../environments';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  firstImageUrl: string = environment.mediaUrl + 'about/1085.jpg';
  secondImageUrl: string = environment.mediaUrl + 'about/2580.jpg';
  playIconUrl: string = environment.mediaUrl + 'about/play-icon.svg';
  cheapRatesIconUrl: string = environment.mediaUrl + 'about/cheap-rates-icon.svg';
  bestTravelPlanIconUrl: string = environment.mediaUrl + 'about/best-travel-plan-icon.svg';
  easyQuickBookingIconUrl: string = environment.mediaUrl + 'about/easy-and-quick-booking-icon.svg';
  handPickedTourIconUrl: string = environment.mediaUrl + 'about/hand-picked-tour-icon.svg';
  privateGuideIconUrl: string = environment.mediaUrl + 'about/private-guide-icon.svg';
  customerCareIconUrl: string = environment.mediaUrl + 'about/customer-care-icon.svg';
  travelerImageOneUrl: string = environment.mediaUrl + 'about/traveler_1.jpg';
  travelerImageTwoUrl: string = environment.mediaUrl + 'about/traveler_2.jpg';
  travelerImageThreeUrl: string = environment.mediaUrl + 'about/traveler_3.jpg';
  travelerImageFourUrl: string = environment.mediaUrl + 'about/traveler_4.jpg';
  travelerImageFiveUrl: string = environment.mediaUrl + 'about/traveler_5.jpg';
  quoteIconUrl: string = environment.mediaUrl + 'about/quote-icon.svg';
  testimonialOneImageUrl: string = environment.mediaUrl + 'about/testimonial_1.jpg';
  testimonialTwoImageUrl: string = environment.mediaUrl + 'about/testimonial_2.jpg';
  testimonialThreeImageUrl: string = environment.mediaUrl + 'about/testimonial_3.jpg';
}
