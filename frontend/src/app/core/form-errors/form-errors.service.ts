import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AuthenticationFormControlNames } from './../authentication/authentication.model';

@Injectable({
  providedIn: 'root',
})
export class FormErrorsService {
  private readonly AuthenticationFormControlNames =
    AuthenticationFormControlNames;

  public getErrorMessage(
    controlName: string,
    control?: AbstractControl | null
  ): string | null {
    if (!control || !control.errors) {
      return null;
    }

    if (control.errors['required']) {
      return 'This field is required.';
    }

    if (control.errors['minlength']) {
      const { requiredLength, actualLength } = control.errors['minlength'];

      return `This value is too short. Minimum length is ${requiredLength} characters — you entered ${actualLength}.`;
    }

    if (control.errors['maxlength']) {
      const { requiredLength, actualLength } = control.errors['maxlength'];

      return `This value exceeds the maximum length of ${requiredLength} characters — you entered ${actualLength}.`;
    }

    if (control.errors['pattern']) {
      switch (controlName) {
        case AuthenticationFormControlNames.EMAIL:
          return 'Please enter a valid email address.';

        case AuthenticationFormControlNames.USERNAME:
          return 'Username must start with a letter; only letters, numbers, _, . or - allowed.';

        case AuthenticationFormControlNames.PASSWORD:
          return 'Password must have upper and lowercase letters, a number, and a special symbol.';

        default:
          return 'The format is invalid. Please check the input and try again.';
      }
    }

    if (control.errors['passwordMismatch']) {
      return "The confirmation password doesn't match the original.";
    }

    return null;
  }
}
