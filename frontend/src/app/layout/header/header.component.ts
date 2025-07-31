import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal, WritableSignal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { filter, Observable, Subscription, tap } from 'rxjs';
import { NavbarComponent } from '../navbar/navbar.component';
import { Currency } from './../../core/currency/currency.model';
import { CurrencyService } from './../../core/currency/currency.service';
import { Language } from './../../core/language/language.model';
import { LanguageService } from './../../core/language/language.service';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent, RouterModule, AsyncPipe, TranslatePipe],
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly currencyService = inject(CurrencyService);
  private readonly languageService = inject(LanguageService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly isCurrencyMenuOpen: WritableSignal<boolean> = signal(true);
  protected readonly isLanguageMenuOpen: WritableSignal<boolean> = signal(false);
  protected readonly isAuthMenuOpen: WritableSignal<boolean> = signal(false);
  protected readonly isMenuOpen: WritableSignal<boolean> = signal(false);

  protected readonly Currency = Currency;
  protected readonly Language = Language;

  private readonly closeMenuOnNavigation: Subscription = this.router.events
    .pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      tap(() => {
        this.setMenusState();
      }),
      takeUntilDestroyed(this.destroyRef),
    )
    .subscribe();

  protected selectedCurrency$: Observable<Currency | null> = this.currencyService.selectedCurrency$;
  protected selectedLanguage$: Observable<Language | null> = this.languageService.selectedLanguage$;

  protected readonly isLoadingCurrency$: Observable<boolean> = this.currencyService.isLoadingCurrency$;
  protected readonly isLoadingLanguage$: Observable<boolean> = this.languageService.isLoadingLanguage$;

  protected onCurrencyMenuOpen(): void {
    this.isCurrencyMenuOpen.update((isCurrencyMenuOpen) => !isCurrencyMenuOpen);
  }

  protected onLanguageMenuOpen(): void {
    this.isLanguageMenuOpen.update((isLanguageMenuOpen) => !isLanguageMenuOpen);
  }

  protected onAuthMenuOpen(): void {
    this.isAuthMenuOpen.update((isAuthMenuOpen) => !isAuthMenuOpen);
  }

  protected onMenuOpen(): void {
    this.isMenuOpen.update((isMenuOpen) => !isMenuOpen);
  }

  protected onChangeLanguage(language: Language): void {
    this.languageService.changeLanguage(language).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }

  protected onChangeCurrency(currency: Currency): void {
    this.currencyService.changeCurrency(currency).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }

  private setMenusState(): void {
    this.isAuthMenuOpen.set(false);
    this.isMenuOpen.set(false);
    this.isCurrencyMenuOpen.set(false);
  }
}
