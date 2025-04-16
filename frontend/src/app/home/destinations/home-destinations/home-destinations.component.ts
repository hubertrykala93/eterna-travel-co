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
    styleUrls: ['./home-destinations.component.css'],
    standalone: false
})
export class HomeDestinationsComponent {
  destinations: Destination[] = [
    {
      imageUrl: environment.mediaUrl + 'home/destinations-1.jpg',
      travelersCount: 174.688,
      country: 'United Kingdom'
    },
    {
      imageUrl: environment.mediaUrl + 'home/destinations-2.jpg',
      travelersCount: 174.688,
      country: 'Turkey'
    },
    {
      imageUrl: environment.mediaUrl + 'home/destinations-3.jpg',
      travelersCount: 174.688,
      country: 'Switzerland'
    },
    {
      imageUrl: environment.mediaUrl + 'home/destinations-4.jpg',
      travelersCount: 174.688,
      country: 'France'
    },
    {
      imageUrl: environment.mediaUrl + 'home/destinations-5.jpg',
      travelersCount: 174.688,
      country: 'Thailand'
    },
    {
      imageUrl: environment.mediaUrl + 'home/destinations-6.jpg',
      travelersCount: 174.688,
      country: 'New Zealand'
    },
    {
      imageUrl: environment.mediaUrl + 'home/destinations-7.jpg',
      travelersCount: 174.688,
      country: 'Brasil'
    },
    {
      imageUrl: environment.mediaUrl + 'home/destinations-8.jpg',
      travelersCount: 174.688,
      country: 'South Africa'
    }
  ];
}
