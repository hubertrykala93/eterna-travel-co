import { HomeService } from './../../services/home/home.service';
import { environment } from './../../environments';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  logoUrl: string = environment.mediaUrl + 'logo/eterna-travel-co-logo.png';
  newsletterIconUrl: string = environment.mediaUrl + 'icons/newsletter-icon.svg';
  newsletterForm: FormGroup;
  successMessage: string = '';

  constructor(private homeService: HomeService) {
    this.newsletterForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255),
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')
      ]),
      dataProcessing: new FormControl(false, [Validators.requiredTrue])
    })
  }

  onSubmit(): void {
    if (this.newsletterForm.valid) {
      const data = this.newsletterForm.value;

      this.homeService.createNewsletter(data).subscribe({
        next: (response) => {
          if (response.success) {
            this.newsletterForm.reset();
            this.successMessage = response.message;
          }
        },
        error: (error) => {
          this.setFormErrors(error.error.errors);
        }
      });
    }
  }

  setFormErrors(errors: any): void {
    for (let key in errors) {
      if (this.newsletterForm.get(key)) {
        this.newsletterForm.get(key)?.setErrors({ validationError: errors[key] });
      }
    }
  }
}
