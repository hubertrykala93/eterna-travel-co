import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
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
  public readonly labelKey: InputSignal<string> = input.required<string>()
  public readonly defaultLabel: InputSignal<string> = input<string>('')
  public readonly color: InputSignal<ButtonColor> = input<ButtonColor>(ButtonColor.SECONDARY)
  public readonly fullWidth: InputSignal<boolean> = input<boolean>(false)
  public readonly size: InputSignal<ButtonSize> = input<ButtonSize>(ButtonSize.SMALL)

  protected readonly ButtonColor = ButtonColor;
}
