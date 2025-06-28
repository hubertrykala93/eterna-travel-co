import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ToastTypes } from './../../../core/toast/toast.model';
import { ToastService } from './../../../core/toast/toast.service';

@Component({
  selector: 'ui-toast',
  imports: [AsyncPipe, CommonModule],
  styleUrl: './toast.component.scss',
  templateUrl: './toast.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  private readonly toastService = inject(ToastService);

  protected readonly ToastTypes = ToastTypes;

  protected readonly toast$ = this.toastService.toast$;
}
