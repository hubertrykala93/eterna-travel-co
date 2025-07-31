import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  AuthenticationControls,
  AuthenticationFormControlNames,
  AuthenticationTabs,
} from './../../../core/authentication/authentication.model';
import { AuthenticationService } from './../../../core/authentication/authentication.service';
import { FormOption } from './../../../core/core.model';
import { FormErrorsComponent } from './../../../shared/ui/form-errors/form-errors.component';
import { InputComponent } from './../../../shared/ui/input/input.component';

@Component({
  selector: 'app-authentication-form',
  imports: [InputComponent, CommonModule, ReactiveFormsModule, FormErrorsComponent],
  standalone: true,
  templateUrl: './authentication-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticationFormComponent implements OnInit {
  private readonly authenticationService = inject(AuthenticationService);
  private readonly cdr = inject(ChangeDetectorRef);

  @Input({ required: true }) activeTab = 'register';
  @Input({ required: true }) form!: FormGroup<AuthenticationControls>;

  public isPasswordVisible = false;

  public formOptions: FormOption[] = this.authenticationService.getFormOptions();

  public readonly AuthenticationTabs = AuthenticationTabs;
  public readonly AuthenticationFormControlNames = AuthenticationFormControlNames;

  public ngOnInit(): void {
    if (this.activeTab === AuthenticationTabs.LOGIN) {
      this.formOptions = this.formOptions.filter((option) => {
        return (
          option.name !== AuthenticationFormControlNames.EMAIL &&
          option.name !== AuthenticationFormControlNames.REPASSWORD
        );
      });
    }
  }

  public onShowPassword(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.cdr.markForCheck();
  }
}
