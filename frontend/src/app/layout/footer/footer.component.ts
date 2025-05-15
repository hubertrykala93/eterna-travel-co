import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { catchError, EMPTY, tap } from 'rxjs';
import { FormErrorsService } from '../../core/form-errors/form-errors.service';
import { InputStatusComponent } from '../../shared/ui/input-status/input-status.component';
import { NewsletterControls } from './../../core/newsletter/newsletter.model';
import { NewsletterService } from './../../core/newsletter/newsletter.service';
import { ButtonComponent } from './../../shared/ui/button/button.component';
import { FormStatusComponent } from './../../shared/ui/form-status/form-status.component';
import { InputComponent } from './../../shared/ui/input/input.component';

@Component({
  selector: 'app-footer',
  imports: [
    InputComponent,
    ButtonComponent,
    InputStatusComponent,
    FormStatusComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './footer.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly newsletterService = inject(NewsletterService);
  private readonly formErrorsService = inject(FormErrorsService);
  private readonly cdr = inject(ChangeDetectorRef);

  public form: FormGroup<NewsletterControls> =
    this.newsletterService.getNewsletterForm();

  public isSuccess: boolean = false;

  public add(): void {
    const data = this.form.value;

    if (data && data.email !== undefined) {
      this.newsletterService
        .createNewsletter({ email: data.email })
        .pipe(
          tap(() => {
            this.isSuccess = true;

            this.cdr.markForCheck();

            setTimeout(() => {
              this.isSuccess = false;

              this.cdr.markForCheck();
            }, 3000);
          }),
          catchError((error) => {
            this.formErrorsService.setControlError(this.form, 'email', error);

            return EMPTY;
          })
        )
        .subscribe();
    }
  }
}
