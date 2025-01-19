import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  getErrorMessages(control: AbstractControl | null, errors: { [key: string]: string }): string[] {
    const messages: string[] = [];

    if (control && control.errors) {
      for (let key in control.errors) {
        if (errors[key]) {
          messages.push(errors[key]);
        }
      }
    }

    return messages;
  };
}
