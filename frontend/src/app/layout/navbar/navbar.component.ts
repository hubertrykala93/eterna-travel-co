import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { NavigationButtonConfig } from '../../core/core.model';
import { LayoutService } from '../../core/layout/layout.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, TranslatePipe, NgClass],
  styleUrl: './navbar.component.scss',
  templateUrl: './navbar.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private readonly layoutService = inject(LayoutService);
  protected readonly router = inject(Router);

  protected navbarNavigationButtons: NavigationButtonConfig[] = this.layoutService.getNavbarNavigationButton();
}
