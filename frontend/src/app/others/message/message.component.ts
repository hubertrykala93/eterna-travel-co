import { MessagesService, MessageType } from './../../services/messages.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css'],
    standalone: false
})
export class MessageComponent implements OnInit {
  message?: { message: string, type: MessageType } | null = null;

  constructor(private messageService: MessagesService) { }

  ngOnInit(): void {
    this.messageService.message.subscribe((message) => {
      this.message = message;
    })
  }

  getClassForType(type: MessageType): string {
    return type
  }
}
