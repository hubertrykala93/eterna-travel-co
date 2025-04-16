import { Tour } from './../../home/tours/home-tours/home-tours.component';
import { Component } from '@angular/core';
import { environment } from 'src/app/environments';

@Component({
    selector: 'app-tours-listing',
    templateUrl: './tours-listing.component.html',
    styleUrls: ['./tours-listing.component.css'],
    standalone: false
})

export class ToursListingComponent {
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
    },
    {
      imageUrl: environment.mediaUrl + 'tours/tours-5.jpg',
      city: 'Kyoto',
      country: 'Japan',
      title: 'Discover Zen Gardens and Ancient Temples',
      rate: 4.7,
      reviews: 22,
      duration: 6,
      startingPrice: 480
    },
    {
      imageUrl: environment.mediaUrl + 'tours/tours-6.jpg',
      city: 'New York City',
      country: 'United States',
      title: 'Iconic Landmarks and Broadway Nights',
      rate: 4.8,
      reviews: 34,
      duration: 4,
      startingPrice: 700
    },
    {
      imageUrl: environment.mediaUrl + 'tours/tours-7.jpg',
      city: 'Reykjavik',
      country: 'Iceland',
      title: 'Northern Lights and Icelandic Wonders',
      rate: 4.7,
      reviews: 19,
      duration: 6,
      startingPrice: 550
    },
    {
      imageUrl: environment.mediaUrl + 'tours/tours-8.jpg',
      city: 'Bangkok',
      country: 'Thailand',
      title: 'Floating Markets and Golden Temples',
      rate: 4.5,
      reviews: 30,
      duration: 4,
      startingPrice: 350
    },
    {
      imageUrl: environment.mediaUrl + 'tours/tours-9.jpg',
      city: 'Cancun',
      country: 'Mexico',
      title: 'Caribbean Beaches and Mayan Ruins',
      rate: 4.8,
      reviews: 26,
      duration: 7,
      startingPrice: 450
    }
  ]
}
