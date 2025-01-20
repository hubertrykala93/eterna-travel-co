import { environment } from './../environments';
import { Component } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})

export class DestinationComponent {
  unitedKingdomImageUrl: string = environment.mediaUrl + 'home/united-kingdom.jpg';
  turkeyImageUrl: string = environment.mediaUrl + 'home/turkey.jpg';
  switzerlandImageUrl: string = environment.mediaUrl + 'home/switzerland.jpg';
  franceImageUrl: string = environment.mediaUrl + 'home/france.jpg';
  thailandImageUrl: string = environment.mediaUrl + 'home/thailand.jpg';
  newZealandImageUrl: string = environment.mediaUrl + 'home/new-zealand.jpg';
  unitedArabEmiratesImageUrl: string = environment.mediaUrl + 'destination/united-arab-emirates.jpg';
  italyImageUrl: string = environment.mediaUrl + 'destination/italy.jpg';
  bangladeshImageUrl: string = environment.mediaUrl + 'destination/bangladesh.jpg';
  egyptImageUrl: string = environment.mediaUrl + 'destination/egypt.jpg';
  indiaImageUrl: string = environment.mediaUrl + 'destination/india.jpg';
  argentinaImageUrl: string = environment.mediaUrl + 'destination/argentina.jpg';
}
