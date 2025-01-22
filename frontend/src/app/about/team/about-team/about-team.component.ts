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
      imageUrl: environment.mediaUrl + 'about/team-1.jpg',
      firstname: 'Antoni',
      lastname: 'Shkraba',
      role: 'Founder & Director'
    },
    {
      imageUrl: environment.mediaUrl + 'about/team-2.jpg',
      firstname: 'Andrew',
      lastname: 'Davie',
      role: 'Chief Operating Officer'
    },
    {
      imageUrl: environment.mediaUrl + 'about/team-3.jpg',
      firstname: 'Orlando',
      lastname: 'Diggs',
      role: 'Director - Hotels'
    },
    {
      imageUrl: environment.mediaUrl + 'about/team-4.jpg',
      firstname: 'Tamara',
      lastname: 'Bellis',
      role: 'Customer Support'
    },
    {
      imageUrl: environment.mediaUrl + 'about/team-5.jpg',
      firstname: 'Philip',
      lastname: 'Martin',
      role: 'Chief Executive'
    }
  ]
}
