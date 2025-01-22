import { Component } from '@angular/core';
import { environment } from 'src/app/environments';

export interface Member {
  imageUrl: string;
  firstname: string;
  lastname: string;
  role: string;
}

@Component({
  selector: 'app-about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.css']
})
export class AboutTeamComponent {
  team: Member[] = [
    {
      imageUrl: environment.mediaUrl + 'about/traveler_1.jpg',
      firstname: 'Antoni',
      lastname: 'Shkraba',
      role: 'Founder & Director'
    },
    {
      imageUrl: environment.mediaUrl + 'about/traveler_2.jpg',
      firstname: 'Andrew',
      lastname: 'Davie',
      role: 'Chief Operating Officer'
    },
    {
      imageUrl: environment.mediaUrl + 'about/traveler_3.jpg',
      firstname: 'Orlando',
      lastname: 'Diggs',
      role: 'Director - Hotels'
    },
    {
      imageUrl: environment.mediaUrl + 'about/traveler_4.jpg',
      firstname: 'Philip',
      lastname: 'Martin',
      role: 'Chief Executive'
    },
    {
      imageUrl: environment.mediaUrl + 'about/traveler_5.jpg',
      firstname: 'Tamara',
      lastname: 'Bellis',
      role: 'Customer Support'
    }
  ]
}
