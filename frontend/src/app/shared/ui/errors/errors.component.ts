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
  selector: 'ui-errors',
  imports: [],
  standalone: true,
  templateUrl: './errors.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorsComponent implements OnInit, OnDestroy {
  private readonly cdr = inject(ChangeDetectorRef);

  @Input({ required: true }) control?: FormControl;
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
