import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastMessage, ToastType, ToastTypes } from './toast.model';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastSubject = new BehaviorSubject<ToastMessage | null>(null);

  public toast$ = this.toastSubject.asObservable();

  public show(message: string, type: ToastType = ToastTypes.INFO): void {
    this.toastSubject.next({ message, type });

    setTimeout(() => this.toastSubject.next(null), 3000);
  }
}
