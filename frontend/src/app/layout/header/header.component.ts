import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal, WritableSignal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { filter, Observable, Subscription, tap } from 'rxjs';
import { NavigationButtonConfig } from '../../core/core.model';
import { CurrencyNavigationButton } from '../../core/currency/currency.model';
import { CurrencyService } from '../../core/currency/currency.service';
import { LanguageNavigationButton } from '../../core/language/language.model';
import { LanguageService } from '../../core/language/language.service';
import { LayoutService } from '../../core/layout/layout.service';
import { DropdownSelectorComponent } from '../../shared/ui/components/dropdown-selector/dropdown-selector.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent, RouterModule, TranslatePipe, DropdownSelectorComponent],
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly layoutService = inject(LayoutService);
  private readonly languageService = inject(LanguageService);
  private readonly currencyService = inject(CurrencyService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly isAuthMenuOpen: WritableSignal<boolean> = signal(false);
  protected readonly isMenuOpen: WritableSignal<boolean> = signal(false);

  protected readonly authNavigationButtons: NavigationButtonConfig[] = this.layoutService.getAuthNavigationButtons();

  private readonly closeMenuOnNavigation: Subscription = this.router.events
    .pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      tap(() => {
        this.setMenusState();
      }),
      takeUntilDestroyed(this.destroyRef),
    )
    .subscribe();

  protected readonly languageNavigationButtons$: Observable<LanguageNavigationButton[]> =
    this.languageService.getLanguageNavigationButtons();

  protected readonly currencyNavigationButtons$: Observable<CurrencyNavigationButton[]> =
    this.currencyService.getCurrencyNavigationButtons();

  protected onAuthMenuOpen(): void {
    this.isAuthMenuOpen.update((isAuthMenuOpen) => !isAuthMenuOpen);
  }

  protected onMenuOpen(): void {
    this.isMenuOpen.update((isMenuOpen) => !isMenuOpen);
  }

  private setMenusState(): void {
    this.isAuthMenuOpen.set(false);
    this.isMenuOpen.set(false);
  }
}
