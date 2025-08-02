import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
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
  @Input() value: string = '';
  @Input({ required: true }) placeholderKey!: string;
  @Input() defaultPlaceholderText?: string;
  @Input() type?: FormType = FormType.TEXT;
  @Input() fullWidth: boolean = false;
  @Input() size: InputSize = InputSize.MEDIUM;

  protected readonly FormType = FormType;
  protected readonly InputSize = InputSize;

  public onChange = (value: string) => {};
  public onTouched = () => {};

  public writeValue(value: string): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  protected handleInput($event: Event): void {
    const target = $event.target as HTMLInputElement;

    this.value = target.value;
    this.onChange(this.value);
  }
}
