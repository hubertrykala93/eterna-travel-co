import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ContactCard } from '../../../../core/contact-us/contact-us.model';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.scss',
  imports: [TranslatePipe, NgClass],
  standalone: true,
})
export class ContactCardComponent {
  @Input({ required: true }) card!: ContactCard;
  @Input({ required: true }) isLast: boolean = false;
}
