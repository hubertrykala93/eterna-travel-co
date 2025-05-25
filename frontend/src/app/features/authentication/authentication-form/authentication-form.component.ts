import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  AuthenticationControls,
  AuthenticationFormControlNames,
  AuthenticationTabs,
} from './../../../core/authentication/authentication.model';
import { FormOptions } from './../../../core/core.model';
import { InputComponent } from './../../../shared/ui/input/input.component';

@Component({
  selector: 'app-authentication-form',
  imports: [InputComponent, CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './authentication-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticationFormComponent {
  @Input({ required: true }) activeTab = 'register';
  @Input({ required: true }) form!: FormGroup<AuthenticationControls>;

  public formOptions: FormOptions[] = [
    {
      control: AuthenticationFormControlNames.EMAIL,
      label: 'Email Address',
      placeholder: 'Enter your email...',
    },
    {
      control: AuthenticationFormControlNames.USERNAME,
      label: 'Username',
      placeholder: 'Enter your username...',
    },
    {
      control: AuthenticationFormControlNames.PASSWORD,
      label: 'Password',
      placeholder: 'Enter your password...',
    },
    {
      control: AuthenticationFormControlNames.REPASSWORD,
      label: 'Confirm Password',
      placeholder: 'Confirm your password...',
    },
  ];

  public readonly AuthenticationTabs = AuthenticationTabs;
  public readonly AuthenticationFormControlNames =
    AuthenticationFormControlNames;
}
