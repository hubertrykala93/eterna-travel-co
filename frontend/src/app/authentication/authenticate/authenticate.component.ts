import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent {
  activeButton: string = 'signUp';
  passwordVisible: boolean = false;
  registerForm: FormGroup;

  constructor(private route: ActivatedRoute) {
    this.registerForm = new FormGroup({
      username: new FormControl('' , {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
          Validators.pattern(/^[A-Za-z._-]+$/)
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

      password: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(255),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{}|;:'",.<>?/]).*$/)
        ]
      }),

      repassword: new FormControl('', {
        validators: [
          Validators.required,
        ]
      })
    })
  }

  ngOnInit(): void {
    const mode = this.route.snapshot.params['mode']

    if (mode === 'register') {
      this.activeButton = 'signUp';
    } else {
      this.activeButton = 'signIn';
    }
  }

  setActive(button: string): void {
    this.activeButton = button;
  }

  setPasswordVisibility(): void {
    if (this.passwordVisible) {
      this.passwordVisible = false
    } else {
      this.passwordVisible = true;
    }
  }

  registerOnSubmit(): void {
    const data = {
      username: this.registerForm.get('username')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
      repassword: this.registerForm.get('repassword')?.value
    }
  }
}
