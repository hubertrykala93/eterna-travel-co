import { Component, Input } from '@angular/core';
import { Member } from '../about-team/about-team.component';

@Component({
  selector: 'app-about-team-card',
  templateUrl: './about-team-card.component.html',
  styleUrls: ['./about-team-card.component.css']
})
export class AboutTeamCardComponent {
  @Input() member!: Member;
}
