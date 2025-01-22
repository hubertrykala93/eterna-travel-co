import { Component, Input } from '@angular/core';
import { Update } from '../home-updates/home-updates.component';

@Component({
  selector: 'app-home-updates-card',
  templateUrl: './home-updates-card.component.html',
  styleUrls: ['./home-updates-card.component.css']
})
export class HomeUpdatesCardComponent {
  @Input() update!: Update;
}
