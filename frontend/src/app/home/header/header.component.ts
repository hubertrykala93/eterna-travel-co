import { environment } from './../../environments';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logoUrl: string = environment.mediaUrl + 'logo/eterna-travel-co-logo.png';

}
