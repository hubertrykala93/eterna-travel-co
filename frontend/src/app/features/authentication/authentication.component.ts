import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { InputComponent } from '../../shared/ui/input/input.component';
import { AuthenticationTabs } from './../../core/authentication/authentication.model';

@Component({
  selector: 'app-register',
  imports: [ButtonComponent, InputComponent, RouterModule],
  templateUrl: './authentication.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticationComponent {
  public readonly router = inject(Router);

  public readonly AuthenticationTabs = AuthenticationTabs;
}
