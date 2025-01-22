import { TourType } from './../home-browse-by-category/home-browse-by-category.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-browse-by-category-card',
  templateUrl: './home-browse-by-category-card.component.html',
  styleUrls: ['./home-browse-by-category-card.component.css']
})
export class HomeBrowseByCategoryCardComponent {
  @Input() tourType!: TourType;
}
