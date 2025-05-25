import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'ui-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnChanges {
  @Input() cssClass = '';
  @Input() type = 'submit';

  @Input() label = 'Submit';

  @Input() disabled = false;

  public styleClass = '';

  ngOnChanges(changes: SimpleChanges): void {
    const baseClass =
      'font-inter font-normal text-action text-white rounded-md bg-brandPrimary';

    const hoverClass = this.disabled
      ? 'opacity-50'
      : 'hover:bg-brandYellow hover:text-heading duration-300';

    this.styleClass = `${baseClass} ${hoverClass}`.trim();
  }
}
