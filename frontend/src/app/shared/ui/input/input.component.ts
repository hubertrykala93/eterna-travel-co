import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, input, InputSignal, signal, WritableSignal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { FormType } from '../../../core/core.model';
import { InputSize } from './input.model';

@Component({
  selector: 'ui-input',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements ControlValueAccessor {
  public readonly placeholderKey: InputSignal<string> = input.required<string>()
  public readonly defaultPlaceholderText: InputSignal<string> = input<string>('');
  public readonly type: InputSignal<FormType> = input<FormType>(FormType.TEXT)
  public readonly fullWidth: InputSignal<boolean> = input<boolean>(false);
  public readonly size: InputSignal<InputSize> = input<InputSize>(InputSize.MEDIUM);

  public value: WritableSignal<string> = signal('')

  protected readonly FormType = FormType;
  protected readonly InputSize = InputSize;

  public onChange = (value: string) => {};
  public onTouched = () => {};

  public writeValue(value: string): void {
    this.value.set(value)
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  protected handleInput($event: Event): void {
    const target = $event.target as HTMLInputElement;

    this.value.set(target.value)
    this.onChange(this.value());
  }
}
