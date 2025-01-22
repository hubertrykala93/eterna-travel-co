import { environment } from './../../../environments';
import { Component } from '@angular/core';

export interface Tour {
  imageUrl: string,
  city: string,
  country: string,
  title: string,
  rate: number,
  reviews: number,
  duration: number,
  startingPrice: number
}

@Component({
  selector: 'app-home-tours',
  templateUrl: './home-tours.component.html',
  styleUrls: ['./home-tours.component.css']
})
export class HomeToursComponent {
  tours: Tour[] = [
    {
      imageUrl: environment.mediaUrl + 'home/tours-1.jpg',
      city: 'Budapest',
      country: 'Hungary',
      title: 'Wonders of the West Coast & Kimberley',
      rate: 4.8,
      reviews: 15,
      duration: 7,
      startingPrice: 520
    },
    {
      imageUrl: environment.mediaUrl + 'home/tours-2.jpg',
      city: 'London',
      country: 'United Kingdom',
      title: 'Windsor Castle, and Bath from London',
      rate: 4.8,
      reviews: 15,
      duration: 7,
      startingPrice: 350
    },
    {
      imageUrl: environment.mediaUrl + 'home/tours-3.jpg',
      city: 'Sydney',
      country: 'Australia',
      title: 'Great Barrier Reef, Aquatic Wonderland',
      rate: 4.8,
      reviews: 15,
      duration: 7,
      startingPrice: 450
    },
    {
      imageUrl: environment.mediaUrl + 'home/tours-4.jpg',
      city: 'Muscat',
      country: 'Oman',
      title: 'Ancient Heritage and Desert Adventures',
      rate: 4.8,
      reviews: 15,
      duration: 7,
      startingPrice: 599
    }
  ]
}
