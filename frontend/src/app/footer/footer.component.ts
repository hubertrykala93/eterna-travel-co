import { ErrorHandlingService } from '../services/error-handling.service';
import { HomeService } from '../services/home/home.service';
import { environment } from '../environments';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  logoUrl: string = environment.mediaUrl + 'logo/eterna-travel-co-logo.png';
  newsletterForm: FormGroup;
  successMessage: string = '';

  constructor(private homeService: HomeService, private errorHandlingService: ErrorHandlingService) {
    this.newsletterForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255),
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]),
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
    // if (this.newsletterForm.valid) {
    //   const data = this.newsletterForm.value;

    //   this.homeService.createNewsletter(data).subscribe({
    //     next: (response) => {
    //       if (response.success) {
    //         this.newsletterForm.reset();
    //         this.successMessage = response.message;

    //         setTimeout(() => {
    //           this.successMessage = '';
    //         }, 2000);
    //       }
    //     },
    //     error: (error) => {

    //     }
    //   });
    // }
  }
}
