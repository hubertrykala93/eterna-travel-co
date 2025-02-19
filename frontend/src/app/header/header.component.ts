import { environment } from '../environments';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logoUrl: string = environment.mediaUrl + 'logo/eterna-travel-co-logo.png';
  currencyChanged: boolean = false;
  selectedCurrency: string = 'USD';

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
}
