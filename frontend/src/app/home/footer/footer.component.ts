import { environment } from './../../environments';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  logoUrl: string = environment.mediaUrl + 'logo/eterna-travel-co-logo.png';

}
