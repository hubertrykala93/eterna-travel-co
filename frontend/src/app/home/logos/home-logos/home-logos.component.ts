import { Component } from '@angular/core';
import { environment } from 'src/app/environments';

@Component({
  selector: 'app-home-logos',
  templateUrl: './home-logos.component.html',
  styleUrls: ['./home-logos.component.css']
})
export class HomeLogosComponent {
  letsGoIconUrl: string = environment.mediaUrl + 'home/lets-go-icon.svg';
  mountainsIconUrl: string = environment.mediaUrl + 'home/mountains-icon.svg';
  sayYesIconUrl: string = environment.mediaUrl + 'home/say-yes-icon.svg';
  startTravelIconUrl: string = environment.mediaUrl + 'home/start-travel-icon.svg';
  summerIconUrl: string = environment.mediaUrl + 'home/summer-icon.svg';
}
