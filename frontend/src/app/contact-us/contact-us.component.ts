import { environment } from './../environments';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  emailIconUrl: string = environment.mediaUrl + 'icons/mail-icon.svg';
  mapPinIconUrl: string = environment.mediaUrl + 'icons/map-pin-icon.svg';
  phoneCallIconUrl: string = environment.mediaUrl + 'icons/phone-call-icon.svg';
}
