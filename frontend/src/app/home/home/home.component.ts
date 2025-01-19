import { environment } from './../../environments';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  budapestImageUrl: string = environment.mediaUrl + 'home/budapest.jpg';
  londonImageUrl: string = environment.mediaUrl + 'home/london.jpg';
  sydneyImageUrl: string = environment.mediaUrl + 'home/sydney.jpg';
  muscatImageUrl: string = environment.mediaUrl + 'home/muscat.jpg';
  unitedKingdomImageUrl: string = environment.mediaUrl + 'home/united-kingdom.jpg';
  turkeyImageUrl: string = environment.mediaUrl + 'home/turkey.jpg';
  switzerlandImageUrl: string = environment.mediaUrl + 'home/switzerland.jpg';
  franceImageUrl: string = environment.mediaUrl + 'home/france.jpg';
  thailandImageUrl: string = environment.mediaUrl + 'home/thailand.jpg';
  newZealandImageUrl: string = environment.mediaUrl + 'home/new-zealand.jpg';
  checkIconUrl: string = environment.mediaUrl + 'home/check-icon.svg';
  whyChooseUsImage1: string = environment.mediaUrl + 'home/why-choose-us-image-1.jpg';
  whyChooseUsImage2: string = environment.mediaUrl + 'home/why-choose-us-image-2.jpg';
  adventureIconUrl: string = environment.mediaUrl + 'icons/adventure-icon.svg';
  beachesIconUrl: string = environment.mediaUrl + 'icons/beaches-icon.svg';
  boatToursIconUrl: string = environment.mediaUrl + 'icons/boat-tours-icon.svg';
  cityToursIconUrl: string = environment.mediaUrl + 'icons/city-tours-icon.svg';
  foodIconUrl: string = environment.mediaUrl + 'icons/food-icon.svg';
  hikingIconUrl: string = environment.mediaUrl + 'icons/hiking-icon.svg';
  quoteIconUrl: string = environment.mediaUrl + 'icons/quote-icon.svg';
  testimonialsImageUrl1: string = environment.mediaUrl + 'home/testimonials1.jpg';
  testimonialsImageUrl2: string = environment.mediaUrl + 'home/testimonials2.jpg';
  testimonialsImageUrl3: string = environment.mediaUrl + 'home/testimonials3.jpg';
  updatesImageUrl1: string = environment.mediaUrl + 'home/updates-image-1.jpg';
  updatesImageUrl2: string = environment.mediaUrl + 'home/updates-image-2.jpg';
  updatesImageUrl3: string = environment.mediaUrl + 'home/updates-image-3.jpg';
  updatesImageUrl4: string = environment.mediaUrl + 'home/updates-image-4.jpg';
  letsGoIconUrl: string = environment.mediaUrl + 'home/lets-go-icon.svg';
  mountainsIconUrl: string = environment.mediaUrl + 'home/mountains-icon.svg';
  sayYesIconUrl: string = environment.mediaUrl + 'home/say-yes-icon.svg';
  startTravelIconUrl: string = environment.mediaUrl + 'home/start-travel-icon.svg';
  summerIconUrl: string = environment.mediaUrl + 'home/summer-icon.svg';
}
