import { Component } from '@angular/core';
import { ErrorHandlingService } from './../../../services/error-handling.service';
import { HomeService } from '../../../services/home.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
    selector: 'app-newsletter-form',
    templateUrl: './newsletter-form.component.html',
    styleUrls: ['./newsletter-form.component.css'],
    standalone: false
})
export class NewsletterFormComponent {
  newsletterForm: FormGroup;
  successMessage: string = '';

  constructor(private homeService: HomeService, private errorHandlingService: ErrorHandlingService) {
    this.newsletterForm = new FormGroup({
      email: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
        ]
      })
    })
  }

  emailErrorMessages(): string[] {
    const errors = this.errorHandlingService.getErrorMessages(
      this.newsletterForm.get('email'),
      {
        required: 'Email is required.',
        minlength: 'Ensure this value has at least 3 characters.',
        maxlength: 'Ensure this value has at most 255 characters.',
        pattern: 'Enter a valid email address.',
        emailExists: 'Email already registered.',
      }
    )

    return errors
  }

  onSubmit(): void {
    if (this.newsletterForm.valid) {
      const data = this.newsletterForm.value;

      this.homeService.createNewsletter(data).subscribe({
        next: (response) => {
          if (response.success) {
            this.newsletterForm.reset();
            this.successMessage = response.detail;

            setTimeout(() => {
              this.successMessage = '';
            }, 2000);
          }
        },
        error: (error) => {
          if (error.status === 409) {
            this.newsletterForm.get('email')?.setErrors({ emailExists: 'Email already registered.' })
          }

          if (error.status === 500) {
            this.newsletterForm.reset();
            this.newsletterForm.setErrors({ serverError: 'Something went wrong. Please try again later.' })
          }
        }
      });
    }
  }
}
