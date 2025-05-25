import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Subscription, tap } from 'rxjs';
import { FormOptions } from 'src/app/core/core.model';
import { AuthenticationFormControlNames } from './../../../core/authentication/authentication.model';
import { FormErrorsService } from './../../../core/form-errors/form-errors.service';

@Component({
  selector: 'ui-form-errors',
  imports: [],
  templateUrl: './form-errors.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormErrorsComponent implements OnInit, OnDestroy {
  private readonly formErrorsService = inject(FormErrorsService);
  private readonly cdr = inject(ChangeDetectorRef);

  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) option!: FormOptions;

  public errorMessage!: string | null;
  public readonly AuthenticationFormControlNames =
    AuthenticationFormControlNames;

  private control!: AbstractControl | null;
  private controlStatus!: Subscription;

  public ngOnInit(): void {
    this.control = this.form.get(this.option.name);

    if (this.control) {
      this.controlStatus = this.control.statusChanges
        .pipe(
          tap(() => {
            this.errorMessage = this.formErrorsService.getErrorMessage(
              this.control,
              this.option.name
            );
            this.cdr.markForCheck();
          })
        )
        .subscribe();
    }
  }

  public ngOnDestroy(): void {
    if (this.controlStatus) {
      this.controlStatus.unsubscribe();
    }
  }
}
