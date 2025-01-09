import { HomeService } from './../../services/home/home.service';
import { HttpClient } from '@angular/common/http';
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

  constructor() {
    this.newsletterForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255), Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')])
    })
  }

  onSubmit(): void {
    console.log(this.newsletterForm.get('email')?.errors);
  }

}
