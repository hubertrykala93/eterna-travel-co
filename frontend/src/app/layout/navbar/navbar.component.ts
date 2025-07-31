import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { NavigationButtonConfig } from '../../core/core.model';
import { LayoutService } from '../../core/layout/layout.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, TranslatePipe],
  styleUrl: './navbar.component.scss',
  templateUrl: './navbar.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private readonly layoutService = inject(LayoutService);

  protected navbarNavigationButtons: NavigationButtonConfig[] = this.layoutService.getNavbarNavigationButton();
}
