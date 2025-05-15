import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'ui-input-status',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './input-status.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputStatusComponent implements OnInit, OnDestroy {
  private readonly cdr = inject(ChangeDetectorRef);

  @Input({ required: true }) control!: FormControl;
  @Input({ required: true }) label!: string;

  private subscription?: Subscription;

  ngOnInit(): void {
    this.subscription = this.control?.statusChanges
      .pipe(tap(() => this.cdr.markForCheck()))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
