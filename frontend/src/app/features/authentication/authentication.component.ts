import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import {
  AuthenticationControls,
  AuthenticationTabs,
  UserRequest,
} from './../../core/authentication/authentication.model';
import { AuthenticationService } from './../../core/authentication/authentication.service';
import { AuthenticationFormComponent } from './authentication-form/authentication-form.component';

@Component({
  selector: 'app-register',
  imports: [
    ButtonComponent,
    RouterModule,
    AuthenticationFormComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './authentication.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticationComponent {
  private readonly authenticationService = inject(AuthenticationService);
  public readonly router = inject(Router);

  public form: FormGroup<AuthenticationControls> =
    this.authenticationService.getFormGroup();

  public readonly isRegister: boolean = this.router.url.includes(
    AuthenticationTabs.REGISTER
  );

  public readonly AuthenticationTabs = AuthenticationTabs;
  public readonly socialMediaOptions = ['Facebbok', 'Google', 'Twitter'];

  public add(): void {
    const data = this.form.value as UserRequest;

    this.authenticationService.register(data).pipe().subscribe();
  }
}
