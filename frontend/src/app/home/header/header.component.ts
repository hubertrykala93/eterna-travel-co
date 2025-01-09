import { environment } from './../../environments';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logoUrl: string = environment.mediaUrl + 'logo/eterna-travel-co-logo.png';
  selectedCurrency: string = 'USD';
  isDropdownVisible: boolean = false;

  showDropdown(isVisible: boolean): void {
    this.isDropdownVisible = true;
  }

  hideDropdown(isVisible: boolean): void {
    this.isDropdownVisible = false;
  }

  selectCurrency(currency: string): void {
    this.selectedCurrency = currency;
    this.isDropdownVisible = false;
  }

}
