import { environment } from './../../../environments';
import { Component } from '@angular/core';

export interface Destination {
  imageUrl: string;
  travelersCount: number;
  country: string;
}

@Component({
  selector: 'app-home-destinations',
  templateUrl: './home-destinations.component.html',
  styleUrls: ['./home-destinations.component.css']
})
export class HomeDestinationsComponent {
  destinations: Destination[] = [
    {
      imageUrl: environment.mediaUrl + 'home/united-kingdom.jpg',
      travelersCount: 174.688,
      country: 'United Kingdom'
    },
    {
      imageUrl: environment.mediaUrl + 'home/turkey.jpg',
      travelersCount: 174.688,
      country: 'Turkey'
    },
    {
      imageUrl: environment.mediaUrl + 'home/switzerland.jpg',
      travelersCount: 174.688,
      country: 'Switzerland'
    },
    {
      imageUrl: environment.mediaUrl + 'home/france.jpg',
      travelersCount: 174.688,
      country: 'France'
    },
    {
      imageUrl: environment.mediaUrl + 'home/thailand.jpg',
      travelersCount: 174.688,
      country: 'Thailand'
    },
    {
      imageUrl: environment.mediaUrl + 'home/new-zealand.jpg',
      travelersCount: 174.688,
      country: 'New Zealand'
    },
    {
      imageUrl: environment.mediaUrl + 'home/brasil.jpg',
      travelersCount: 174.688,
      country: 'Brasil'
    },
    {
      imageUrl: environment.mediaUrl + 'home/south-africa.jpg',
      travelersCount: 174.688,
      country: 'South Africa'
    }
  ];
}
