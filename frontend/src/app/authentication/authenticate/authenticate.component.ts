import { AuthenticationService } from './../../services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Component } from '@angular/core';

export function passwordMissmatchValidator(formControlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.parent) {
      return null;
    } else {
      const password = control.parent.value['password'];

      if (control.value != password) {
        return { passwordMissmatchError : 'The confirmation password does not match the entered password.' };
      } else {
        return null;
      }
    }

  }
}

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent {
  activeButton: string = 'signUp';
  passwordVisible: boolean = false;
  registerForm: FormGroup;
  registerSuccessMessage: string = '';

  constructor(private route: ActivatedRoute, private authService: AuthenticationService) {
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
          passwordMissmatchValidator('password')
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
    };

    this.authService.registerUser(data).subscribe({
      next: response => {
        this.registerForm.reset();

        if (response.success) {
          this.registerSuccessMessage = 'The account has been successfully created. Check your email to activate your account.';

          setTimeout(() => {
            this.registerSuccessMessage = ''
          }, 3000)
        }
      },
      error: error => {
        this.registerForm.reset();

        if (error.error.code === 'username_exists') {
          this.registerForm.get('username')?.setErrors({ usernameUniqueError : 'The username already exists, please choose a different one.' })
        }

        if (error.error.code === 'email_exists') {
          this.registerForm.get('email')?.setErrors({ emailUniqueError : 'The email already exists, please choose a different one.' })
        }

        if (error.status === 500) {
          this.registerForm.setErrors({ serverError : 'Something went wrong. Please try again later...'})
        }
      }
    })
  }
}
