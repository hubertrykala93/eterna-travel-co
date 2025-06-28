import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, tap } from 'rxjs';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent, RouterModule],
  styleUrl: './header.component.scss',
  templateUrl: './header.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly destroyRef = inject(DestroyRef);

  protected isAuthMenuOpen: boolean = false;
  protected isMenuOpen: boolean = false;

  private closeMenuOnNavigation = this.router.events
    .pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      tap((event) => {
        (this.isAuthMenuOpen = false), (this.isMenuOpen = false);
        this.cdr.markForCheck();
      }),
      takeUntilDestroyed(this.destroyRef)
    )
    .subscribe();

  protected onAuthMenuOpen(): void {
    this.isAuthMenuOpen = !this.isAuthMenuOpen;
  }

  protected onMenuOpen(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
