import { environment } from './../environments';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  firstImageUrl: string = environment.mediaUrl + 'about/1085.jpg';
  secondImageUrl: string = environment.mediaUrl + 'about/2580.jpg';
}
