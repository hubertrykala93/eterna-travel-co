import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  inject,
  Input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ui-input',
  imports: [CommonModule],
  templateUrl: './input.component.html',
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
  private readonly cdr = inject(ChangeDetectorRef);

  @Input() cssClass: string = '';
  @Input() id?: string = '';

  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() value: string = '';
  @Input() disabled: boolean = false;

  @Input() icon?: string = '';
  @Input() iconCssClass: string = '';

  public styleClass: string =
    'block font-inter font-light text-bodySmall rounded-md w-full';
  public iconStyleClass: string =
    'absolute left-3 top-1/2 -translate-y-1/2 text-black text-opacity-30';

  public onChange = (value: string) => {};
  public onTouched = () => {};

  public writeValue(value: string): void {
    this.value = value;

    this.cdr.markForCheck();
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;

    this.value = target.value;
    this.onChange(this.value);
  }
}
