import { Component, Input } from '@angular/core';
import { RecentArticle } from 'src/app/services/blog.service';

@Component({
    selector: 'app-updates-card',
    templateUrl: './updates-card.component.html',
    styleUrls: ['./updates-card.component.css'],
    standalone: false
})
export class HomeUpdatesCardComponent {
  @Input() article?: RecentArticle;
}
