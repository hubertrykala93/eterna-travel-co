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
  styleUrls: ['./about-features.component.css']
})

export class AboutFeaturesComponent {
  features: Feature[] = [
    {
      imageUrl: environment.mediaUrl + 'icons/cheap-rates-icon.svg',
      title: 'Cheap Rates',
      content: 'Credibly target visionary portals rather than prospective human capital.'
    },
    {
      imageUrl: environment.mediaUrl + 'icons/best-travel-plan-icon.svg',
      title: 'Best Travel Plan',
      content: 'Credibly target visionary portals rather than prospective human capital.'
    },
    {
      imageUrl: environment.mediaUrl + 'icons/easy-and-quick-booking-icon.svg',
      title: 'Easy & Quick Booking',
      content: 'Credibly target visionary portals rather than prospective human capital.'
    },
    {
      imageUrl: environment.mediaUrl + 'icons/hand-picked-tour-icon.svg',
      title: 'Hand-picked Tour',
      content: 'Credibly target visionary portals rather than prospective human capital.'
    },
    {
      imageUrl: environment.mediaUrl + 'icons/private-guide-icon.svg',
      title: 'Private Guide',
      content: 'Credibly target visionary portals rather than prospective human capital.'
    },
    {
      imageUrl: environment.mediaUrl + 'icons/customer-care-icon.svg',
      title: 'Customer Care 24/7',
      content: 'Credibly target visionary portals rather than prospective human capital.'
    }
  ]
}
