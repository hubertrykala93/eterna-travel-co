import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ui-form-status',
  imports: [],
  templateUrl: './form-status.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormStatusComponent {
  @Input({ required: true }) success: boolean = false;
  @Input({ required: true }) successMessage!: string;
}
