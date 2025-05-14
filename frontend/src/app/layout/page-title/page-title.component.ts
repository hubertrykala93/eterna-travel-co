import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-page-title',
  imports: [],
  templateUrl: './page-title.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTitleComponent {}
