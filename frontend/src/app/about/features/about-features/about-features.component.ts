import { Component } from '@angular/core';
import { environment } from 'src/app/environments';

export interface Feature {
  imageUrl: string;
  title: string;
  content: string;
}

@Component({
    selector: 'app-about-features',
    templateUrl: './about-features.component.html',
    styleUrls: ['./about-features.component.css'],
    standalone: false
})

export class AboutFeaturesComponent {
  cheapRatesIconUrl: string = environment.mediaUrl + 'icons/cheap-rates-icon.svg';
  bestTravelPlanIconUrl: string = environment.mediaUrl + 'icons/best-travel-plan-icon.svg';
  easyQuickBookingIconUrl: string = environment.mediaUrl + 'icons/easy-and-quick-booking-icon.svg';
  handPickedTourIconUrl: string = environment.mediaUrl + 'icons/hand-picked-tour-icon.svg';
  privateGuideIconUrl: string = environment.mediaUrl + 'icons/private-guide-icon.svg';
  customerCareIconUrl: string = environment.mediaUrl + 'icons/customer-care-icon.svg';

}
