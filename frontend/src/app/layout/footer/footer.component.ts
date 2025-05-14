import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NewsletterControls } from 'src/app/core/newsletter/newsletter.model';
import { NewsletterService } from './../../core/newsletter/newsletter.service';
import { ButtonComponent } from './../../shared/ui/button/button.component';
import { ErrorsComponent } from './../../shared/ui/errors/errors.component';
import { InputComponent } from './../../shared/ui/input/input.component';

@Component({
  selector: 'app-footer',
  imports: [
    InputComponent,
    ButtonComponent,
    ErrorsComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './footer.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly newsletterService = inject(NewsletterService);

  public form: FormGroup<NewsletterControls> =
    this.newsletterService.getNewsletterForm();

  public add(): void {
    const data = this.form.value;

    if (data && data.email !== undefined) {
      this.newsletterService
        .createNewsletter({ email: data.email })
        .pipe()
        .subscribe();
    }
  }
}
