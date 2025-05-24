import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { tap } from 'rxjs';
import {
  NewsletterControls,
  NewsletterRequest,
} from './../../core/newsletter/newsletter.model';
import { NewsletterService } from './../../core/newsletter/newsletter.service';
import { ButtonComponent } from './../../shared/ui/button/button.component';
import { InputComponent } from './../../shared/ui/input/input.component';

@Component({
  selector: 'app-footer',
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly newsletterService = inject(NewsletterService);

  public form: FormGroup<NewsletterControls> =
    this.newsletterService.getNewsletterForm();

  public add(): void {
    const data = this.form.value as NewsletterRequest;

    this.newsletterService
      .createNewsletter(data)
      .pipe(tap(() => this.form.reset()))
      .subscribe();
  }
}
