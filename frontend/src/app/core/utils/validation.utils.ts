import { Validators } from '@angular/forms';

export default class ValidationUtils {
  static EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  static EMAIL_VALIDATOR = Validators.compose([
    Validators.required,
    Validators.minLength(3),
    Validators.pattern(ValidationUtils.EMAIL_PATTERN),
    Validators.maxLength(255),
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
}
