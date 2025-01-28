import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type MessageType = 'success' | 'error' | 'info' | 'warning';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messageSource = new BehaviorSubject<{ message: string, type: MessageType} | null>(null)
  message = this.messageSource.asObservable()

  showMessage(message: string, type: MessageType): void {
    this.messageSource.next({ message, type })
  }

}
