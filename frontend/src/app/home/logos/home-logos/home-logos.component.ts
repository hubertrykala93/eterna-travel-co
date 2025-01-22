import { Component } from '@angular/core';
import { environment } from 'src/app/environments';

@Component({
  selector: 'app-home-logos',
  templateUrl: './home-logos.component.html',
  styleUrls: ['./home-logos.component.css']
})
export class HomeLogosComponent {
  letsGoImageUrl: string = environment.mediaUrl + 'home/logos/lets-go-logo.svg';
  mountainsImageUrl: string = environment.mediaUrl + 'home/logos/mountains-logo.svg';
  sayYesImageUrl: string = environment.mediaUrl + 'home/logos/say-yes-logo.svg';
  startTravelImageUrl: string = environment.mediaUrl + 'home/logos/start-travel-logo.svg';
  summerImageUrl: string = environment.mediaUrl + 'home/logos/summer-logo.svg';
}
