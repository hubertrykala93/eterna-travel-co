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
    styleUrls: ['./about-team.component.css'],
    standalone: false
})
export class AboutTeamComponent {
  travelerImageUrl1: string = environment.mediaUrl + 'about/team-1.jpg';
  travelerImageUrl2: string = environment.mediaUrl + 'about/team-2.jpg';
  travelerImageUrl3: string = environment.mediaUrl + 'about/team-3.jpg';
  travelerImageUrl4: string = environment.mediaUrl + 'about/team-4.jpg';
  travelerImageUrl5: string = environment.mediaUrl + 'about/team-5.jpg';

}
