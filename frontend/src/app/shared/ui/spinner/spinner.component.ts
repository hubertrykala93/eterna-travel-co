import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-spinner',
  imports: [],
  templateUrl: './spinner.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {}
