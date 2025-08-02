import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { tap } from 'rxjs';
import { ContactRequest, ContactUsFormControls } from 'src/app/core/contact-us/contact-us.model';
import { FormType } from '../../core/core.model';
import { ContactCard, ContactFormOption } from './../../core/contact-us/contact-us.model';
import { ContactUsService } from './../../core/contact-us/contact-us.service';
import { ButtonComponent } from './../../shared/ui/button/button.component';
import { InputComponent } from './../../shared/ui/input/input.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';

@Component({
  selector: 'app-contact-us',
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule, TranslatePipe, ContactCardComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsComponent {
  private readonly contactUsService = inject(ContactUsService);
  private readonly cdr = inject(ChangeDetectorRef);

  protected form: FormGroup<ContactUsFormControls> = this.contactUsService.getContactUsForm();

  protected readonly contactCards: ContactCard[] = this.contactUsService.contactCards;
  protected readonly contactFormOptions: ContactFormOption[] = this.contactUsService.contactFormOptions;

  protected readonly FormType = FormType;

  protected add(): void {
    const data = this.form.value as ContactRequest;

    this.contactUsService
      .sendMessage(data)
      .pipe(tap(() => this.form.reset()))
      .subscribe();
  }
}
