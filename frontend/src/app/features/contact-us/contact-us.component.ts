import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { tap } from 'rxjs';
import {
  ContactRequest,
  ContactUsControls,
} from 'src/app/core/contact-us/contact-us.model';
import { ContactUsService } from './../../core/contact-us/contact-us.service';
import { ButtonComponent } from './../../shared/ui/button/button.component';
import { InputComponent } from './../../shared/ui/input/input.component';

@Component({
  selector: 'app-contact-us',
  imports: [InputComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsComponent {
  private readonly contactUsService = inject(ContactUsService);

  public form: FormGroup<ContactUsControls> =
    this.contactUsService.getContactUsForm();

  public add(): void {
    const data = this.form.value as ContactRequest;

    this.contactUsService
      .sendMessage(data)
      .pipe(tap(() => this.form.reset()))
      .subscribe();
  }
}
