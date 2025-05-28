import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export default class ValidationUtils {
  static EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  static USERNAME_PATTERN = /^[a-zA-Z][a-zA-Z0-9_.-]*$/;
  static PASSWORD_PATTERN =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

  static EMAIL_VALIDATOR = Validators.compose([
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(255),
    Validators.pattern(ValidationUtils.EMAIL_PATTERN),
  ]);

  static NAME_VALIDATOR = Validators.compose([
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(255),
  ]);

  static MESSAGE_VALIDATOR = Validators.compose([
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(1000),
  ]);

  static USERNAME_VALIDATOR = Validators.compose([
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(255),
    Validators.pattern(this.USERNAME_PATTERN),
  ]);

  static PASSWORD_VALIDATOR = Validators.compose([
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(255),
    Validators.pattern(this.PASSWORD_PATTERN),
  ]);

  static passwordMatchValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const password = group.get('password');
      const repassword = group.get('repassword');

      if (password && repassword && password.value !== repassword.value) {
        repassword.setErrors({ passwordMismatch: true });
      } else {
        if (repassword?.hasError('passwordMismatch')) {
          repassword.setErrors(null);
        }
      }

      return null;
    };
  }
}
