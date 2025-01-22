import { Component } from '@angular/core';
import { environment } from 'src/app/environments';

export interface Update {
  imageUrl: string,
  date: Date,
  user: string,
  title: string
}

@Component({
  selector: 'app-home-updates',
  templateUrl: './home-updates.component.html',
  styleUrls: ['./home-updates.component.css']
})
export class HomeUpdatesComponent {
  updates: Update[] = [
    {
      imageUrl: environment.mediaUrl + 'home/updates-1.jpg',
      date: new Date('Jul, 13, 2025'),
      user: 'Admin',
      title: 'The Impact of Covid-19 on travel & tourism industry'
    },
    {
      imageUrl: environment.mediaUrl + 'home/updates-2.jpg',
      date: new Date('Jul, 13, 2025'),
      user: 'Admin',
      title: 'The Impact of Covid-19 on travel & tourism industry'
    },
    {
      imageUrl: environment.mediaUrl + 'home/updates-3.jpg',
      date: new Date('Jul, 13, 2025'),
      user: 'Admin',
      title: 'The Impact of Covid-19 on travel & tourism industry'
    },
    {
      imageUrl: environment.mediaUrl + 'home/updates-4.jpg',
      date: new Date('Jul, 13, 2025'),
      user: 'Admin',
      title: 'The Impact of Covid-19 on travel & tourism industry'
    }
  ];
}
