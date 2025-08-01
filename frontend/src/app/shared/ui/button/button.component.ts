import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonColor, ButtonSize } from './button.model';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  imports: [TranslatePipe, NgClass],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input({ required: true }) labelKey!: string;
  @Input() defaultLabel?: string;
  @Input() color: ButtonColor = ButtonColor.SECONDARY;
  @Input() fullWidth: boolean = false;
  @Input() size: ButtonSize = ButtonSize.SMALL;

  protected readonly ButtonColor = ButtonColor;
}
