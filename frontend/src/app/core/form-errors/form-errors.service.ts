import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormErrorsService {
  public setControlError(
    form: FormGroup,
    controlName: string,
    error: any
  ): void {
    const responseError = error.error.error;
    const errorKey = Object.keys(responseError)[0];

    if (errorKey === 'uniqueError') {
      form.controls[controlName].setErrors({
        [errorKey]: `This ${controlName} already exists.`,
      });
    }
  }
}
