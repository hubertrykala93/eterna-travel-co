import { environment } from './../../environments';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent {
  emailIconUrl: string = environment.mediaUrl + 'icons/mail-icon.svg';
  mapPinIconUrl: string = environment.mediaUrl + 'icons/map-pin-icon.svg';
  phoneCallIconUrl: string = environment.mediaUrl + 'icons/phone-call-icon.svg';
}
