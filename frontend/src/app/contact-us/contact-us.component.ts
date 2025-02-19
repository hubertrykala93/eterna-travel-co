import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { environment } from '../environments';

export interface ContactData {
  name: string,
  email: string,
  content: string
}

export interface ContactResponse {
  detail?: string,
  success?: boolean,
  error?: string,
  errors?: {}
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm: FormGroup;
  contactApiUrl: string = environment.apiBaseUrl + 'api/v1/contact';
  successMessage: string = '';

  constructor(private http: HttpClient) {
    this.contactForm = new FormGroup({
      name: new FormControl('' , {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
          Validators.pattern(/^[A-Za-z ]+$/)
        ]
      }),

      email: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
        ]
      }),

      content: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(1000)
        ]
      })
    })
  }

  sendContactRequest(data: ContactData): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(this.contactApiUrl, data);
  }

  onSubmit(): void {
    const data = {
      name: this.contactForm.get('name')?.value,
      email: this.contactForm.get('email')?.value,
      content: this.contactForm.get('content')?.value
    }

    this.sendContactRequest(data).subscribe({
      next: response => {
        if (response.detail) {
          this.successMessage = response.detail;

          setTimeout(() => {
            this.successMessage = ''
          }, 3000)
        }
      },
      error: error => {
        this.contactForm.hasError
        if (error.status === 500) {
          this.contactForm.setErrors({
            SMTPError : 'Something went wrong. Please try again later...'
          })
        }
      }
    })
  }
}
