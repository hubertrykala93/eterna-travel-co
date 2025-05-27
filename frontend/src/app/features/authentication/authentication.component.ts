import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import {
  AuthenticationControls,
  AuthenticationTabs,
  UserRequest,
} from './../../core/authentication/authentication.model';
import { AuthenticationService } from './../../core/authentication/authentication.service';
import { register } from './../../core/authentication/state/auth.actions';
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
  public readonly router = inject(Router);
  private readonly store = inject(Store);
  private readonly authenticationService = inject(AuthenticationService);

  public form: FormGroup<AuthenticationControls> =
    this.authenticationService.getFormGroup();

  public readonly isRegister: boolean = this.router.url.includes(
    AuthenticationTabs.REGISTER
  );

  public readonly AuthenticationTabs = AuthenticationTabs;
  public readonly socialMediaOptions = ['Facebbok', 'Google', 'Twitter'];

  public add(): void {
    const data = this.form.value as UserRequest;
    console.log(data);

    this.store.dispatch(register({ user: data }));

    // this.authenticationService.register(data).pipe().subscribe();
  }
}
