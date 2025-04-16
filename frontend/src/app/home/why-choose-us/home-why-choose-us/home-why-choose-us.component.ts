import { Component } from '@angular/core';
import { environment } from './../../../environments';

@Component({
    selector: 'app-home-why-choose-us',
    templateUrl: './home-why-choose-us.component.html',
    styleUrls: ['./home-why-choose-us.component.css'],
    standalone: false
})
export class HomeWhyChooseUsComponent {
  checkIconUrl: string = environment.mediaUrl + 'home/check-icon.svg';
  whyChooseUsImage1: string = environment.mediaUrl + 'home/why-choose-us-image-1.jpg';
  whyChooseUsImage2: string = environment.mediaUrl + 'home/why-choose-us-image-2.jpg';
  adventureIconUrl: string = environment.mediaUrl + 'icons/adventure-icon.svg';
  beachesIconUrl: string = environment.mediaUrl + 'icons/beaches-icon.svg';
  boatToursIconUrl: string = environment.mediaUrl + 'icons/boat-tours-icon.svg';
  cityToursIconUrl: string = environment.mediaUrl + 'icons/city-tours-icon.svg';
  foodIconUrl: string = environment.mediaUrl + 'icons/food-icon.svg';
  hikingIconUrl: string = environment.mediaUrl + 'icons/hiking-icon.svg';
}
