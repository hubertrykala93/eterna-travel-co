import { Component } from '@angular/core';
import { environment } from 'src/app/environments';

export interface TourType {
  imageUrl: string;
  title: string;
  tourCount: number;
  startingPrice: number;
}

@Component({
  selector: 'app-home-browse-by-category',
  templateUrl: './home-browse-by-category.component.html',
  styleUrls: ['./home-browse-by-category.component.css']
})

export class HomeBrowseByCategoryComponent {
  tourTypes: TourType[] = [
    {
      imageUrl: environment.mediaUrl + 'icons/adventure-icon.svg',
      title: 'Adventure',
      tourCount: 10,
      startingPrice: 250
    },
    {
      imageUrl: environment.mediaUrl + 'icons/beaches-icon.svg',
      title: 'Beaches',
      tourCount: 10,
      startingPrice: 250
    },
    {
      imageUrl: environment.mediaUrl + 'icons/boat-tours-icon.svg',
      title: 'Boat Tours',
      tourCount: 10,
      startingPrice: 250
    },
    {
      imageUrl: environment.mediaUrl + 'icons/city-tours-icon.svg',
      title: 'City Tours',
      tourCount: 10,
      startingPrice: 250
    },
    {
      imageUrl: environment.mediaUrl + 'icons/food-icon.svg',
      title: 'Food',
      tourCount: 10,
      startingPrice: 250
    },
    {
      imageUrl: environment.mediaUrl + 'icons/hiking-icon.svg',
      title: 'Hiking',
      tourCount: 10,
      startingPrice: 250
    },
  ]
}
