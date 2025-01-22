import { environment } from './../environments';
import { Component } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})

export class DestinationComponent {
  unitedKingdomImageUrl: string = environment.mediaUrl + 'destination/destinations-1.jpg';
  turkeyImageUrl: string = environment.mediaUrl + 'destination/destinations-2.jpg';
  switzerlandImageUrl: string = environment.mediaUrl + 'destination/destinations-3.jpg';
  franceImageUrl: string = environment.mediaUrl + 'destination/destinations-4.jpg';
  thailandImageUrl: string = environment.mediaUrl + 'destination/destinations-5.jpg';
  newZealandImageUrl: string = environment.mediaUrl + 'destination/destinations-6.jpg';
  unitedArabEmiratesImageUrl: string = environment.mediaUrl + 'destination/destinations-7.jpg';
  italyImageUrl: string = environment.mediaUrl + 'destination/destinations-8.jpg';
  bangladeshImageUrl: string = environment.mediaUrl + 'destination/destinations-9.jpg';
  egyptImageUrl: string = environment.mediaUrl + 'destination/destinations-10.jpg';
  indiaImageUrl: string = environment.mediaUrl + 'destination/destinations-11.jpg';
  argentinaImageUrl: string = environment.mediaUrl + 'destination/destinations-12.jpg';
}
