import { Injectable } from '@angular/core';
import { NavigationButtonConfig } from '../core.model';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  public getAuthNavigationButtons(): NavigationButtonConfig[] {
    return [
      {
        link: 'auth/login',
        textKey: 'header.login',
        defaultText: 'Login',
      },
      {
        link: 'auth/register',
        textKey: 'header.register',
        defaultText: 'Register',
      },
    ];
  }

  public getNavbarNavigationButton(): NavigationButtonConfig[] {
    return [
      {
        link: '/',
        textKey: 'navbar.home',
        defaultText: 'Home',
      },
      {
        link: '/about',
        textKey: 'navbar.about',
        defaultText: 'About',
      },
      {
        link: '/tours',
        textKey: 'navbar.tours',
        defaultText: 'Tours',
      },
      {
        link: '/destinations',
        textKey: 'navbar.destinations',
        defaultText: 'Destinations',
      },
      {
        link: '/blog',
        textKey: 'navbar.blog',
        defaultText: 'Blog',
      },
      {
        link: '/contact-us',
        textKey: 'navbar.contact',
        defaultText: 'Contact Us',
      },
    ];
  }
}
