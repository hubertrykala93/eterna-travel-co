import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type MessageType = 'success' | 'error' | 'info' | 'warning';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {
    messageSubject = new BehaviorSubject<{ message: string, type: MessageType} | null>(null)
    message = this.messageSubject.asObservable()

    showMessage(message: string, type: MessageType): void {
      this.messageSubject.next({ message, type })

      setTimeout(() => {
        this.clearMessage();
      }, 3000)
    }

    clearMessage(): void {
      this.messageSubject.next(null);
    }
  }
