import { AuthenticationService } from './../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Component } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

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
  loginForm: FormGroup;
  registerSuccessMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private router: Router,
    private messageService: MessagesService
    ) {
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

    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: Validators.required
      }),
      password: new FormControl('', {
        validators: Validators.required
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

  loginFormOnSubmit(): void {
    const data = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }

    this.authService.loginUser(data).subscribe({
      next: response => {
        if (response.success) {
          this.loginForm.reset();

          this.messageService.showMessage('You have been successfully logged in.', 'success');

          sessionStorage.setItem('accessToken', response.access_token);
          sessionStorage.setItem('refreshToken', response.refresh_token);

          this.router.navigate(['/'])
        }
      },
      error: error => {
        if (error.error.code === 'incorrect_data') {
          this.loginForm.setErrors({ incorrectDataError : 'Incorrect email or password.' })
        }

        if (error.error.code === 'unknown_error') {
          this.loginForm.setErrors({ unknownError : 'Something went wrong. Please try again.'})
        }
      }
    })
  }
}
