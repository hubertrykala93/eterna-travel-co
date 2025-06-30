import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription, tap } from 'rxjs';
import { NavbarComponent } from '../navbar/navbar.component';
import { Currency } from './../../core/currency/currency.model';
import { CurrencyService } from './../../core/currency/currency.service';
import { Language } from './../../core/language/language.model';
import { LanguageService } from './../../core/language/language.service';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent, RouterModule, AsyncPipe],
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly currencyService = inject(CurrencyService);
  private readonly languageService = inject(LanguageService);
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly destroyRef = inject(DestroyRef);

  protected isCurrencyMenuOpen: boolean = false;
  protected isLanguageMenuOpen: boolean = false;
  protected isAuthMenuOpen: boolean = false;
  protected isMenuOpen: boolean = false;

  protected readonly Currency = Currency;
  protected readonly Language = Language;

  private readonly closeMenuOnNavigation: Subscription = this.router.events
    .pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      tap(() => {
        this.isAuthMenuOpen = false;
        this.isMenuOpen = false;
        this.isCurrencyMenuOpen = false;
        this.cdr.markForCheck();
      }),
      takeUntilDestroyed(this.destroyRef)
    )
    .subscribe();

  protected selectedCurrency$ = this.currencyService.selectedCurrency$;
  protected selectedLanguage$ = this.languageService.selectedLanguage$;

  protected readonly isLoadingCurrency$ =
    this.currencyService.isLoadingCurrency$;
  protected readonly isLoadingLanguage$ =
    this.languageService.isLoadingLanguage$;

  protected onCurrencyMenuOpen(): void {
    this.isCurrencyMenuOpen = !this.isCurrencyMenuOpen;
  }

  protected onLanguageMenuOpen(): void {
    this.isLanguageMenuOpen = !this.isLanguageMenuOpen;
  }

  protected onAuthMenuOpen(): void {
    this.isAuthMenuOpen = !this.isAuthMenuOpen;
  }

  protected onMenuOpen(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  protected onChangeLanguage(language: string): void {
    this.languageService
      .changeLanguage(language)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }

  protected onChangeCurrency(currency: string): void {
    this.currencyService
      .changeCurrency(currency)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
}
