import { AuthenticationService } from './../services/authentication.service';
import { environment } from '../environments';
import { Component } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: false
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  logoUrl: string = environment.mediaUrl + 'logo/eterna-travel-co-logo.png';
  currencyChanged: boolean = false;
  selectedCurrency: string = 'USD';

  constructor(
    private authService: AuthenticationService,
    private messageService: MessagesService
    ) {
    this.authService.authStatus$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  changeCurrency(): void {
    this.currencyChanged = true;
  }

  selectCurrency(currency: string): void {
    this.selectedCurrency = currency;

    setTimeout(() => {
      this.currencyChanged = false;
    }, 0)
  }

  selectedCurrencyOnMouseLeave(event: any): void {
    if (event) {
      this.currencyChanged = false;
    }
  }

  logoutUser(): void {
    this.authService.logout();

    this.messageService.showMessage('You have been successfully logged out.', 'success')
  }
}
