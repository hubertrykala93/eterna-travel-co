import { AsyncPipe } from '@angular/common';
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
import { selectAuthLoading } from './../../core/authentication/state/auth.selector';
import { SpinnerComponent } from './../../shared/ui/spinner/spinner.component';
import { AuthenticationFormComponent } from './authentication-form/authentication-form.component';

@Component({
  selector: 'app-register',
  imports: [
    ButtonComponent,
    RouterModule,
    AuthenticationFormComponent,
    ReactiveFormsModule,
    AsyncPipe,
    SpinnerComponent,
  ],
  templateUrl: './authentication.component.html',
  standalone: true,
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
  public readonly socialMediaOptions = ['Facebook', 'Google', 'Twitter'];

  protected isLoading$ = this.store.select(selectAuthLoading);

  public add(): void {
    const data = this.form.value as UserRequest;

    this.store.dispatch(register({ user: data }));
  }
}
