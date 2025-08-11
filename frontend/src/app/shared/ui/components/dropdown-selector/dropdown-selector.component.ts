import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { defer, filter, map, Observable, Subscription, switchMap, take, tap } from 'rxjs';
import { CurrencyCode } from '../../../../core/currency/currency.model';
import { CurrencyService } from '../../../../core/currency/currency.service';
import { LanguageCode, LanguageName } from '../../../../core/language/language.model';
import { LanguageService } from '../../../../core/language/language.service';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';
import { DropdownButton } from './dropdown-selector.model';

@Component({
  selector: 'app-dropdown-selector',
  templateUrl: './dropdown-selector.component.html',
  styleUrl: './dropdown-selector.component.scss',
  standalone: true,
  imports: [AsyncPipe, TranslatePipe, DropdownMenuComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownSelectorComponent implements OnInit {
  private readonly currencyService = inject(CurrencyService);
  private readonly languageService = inject(LanguageService);
  private readonly router = inject(Router);

  @Input({ required: true }) navigationButtons$!: Observable<DropdownButton[]>;

  protected readonly isMenuOpen: WritableSignal<boolean> = signal(false);

  protected readonly LanguageCode = LanguageCode;
  protected readonly LanguageName = LanguageName;

  protected selectedCurrency$: Observable<CurrencyCode | null> = this.currencyService.selectedCurrency$;
  protected selectedLanguage$: Observable<LanguageCode | null> = this.languageService.selectedLanguage$;

  protected closeMenuOnNavigation: Subscription = this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd),
      tap(() => this.isMenuOpen.set(false)),
    )
    .subscribe();

  protected readonly isLanguageButtons$: Observable<boolean> = defer(() =>
    this.navigationButtons$.pipe(
      map((buttons) => {
        return 'src' in buttons[0];
      }),
    ),
  );

  ngOnInit(): void {
    this.navigationButtons$.pipe(tap((value) => console.log('Value -> ', value))).subscribe();
  }
  protected onMenuOpen(): void {
    this.isMenuOpen.update((isMenuOpen) => !isMenuOpen);
  }

  protected onChange(code: CurrencyCode | LanguageCode): void {
    this.isLanguageButtons$
      .pipe(
        take(1),
        switchMap((isLanguage) =>
          isLanguage
            ? this.languageService.changeLanguage(code as LanguageCode)
            : this.currencyService.changeCurrency(code as CurrencyCode),
        ),
      )
      .subscribe();
  }
}
