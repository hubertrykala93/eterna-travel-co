import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  inject,
  Input,
  OnInit,
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
export class InputComponent implements ControlValueAccessor, OnInit {
  private readonly cdr = inject(ChangeDetectorRef);

  @Input() cssClass = '';
  @Input() id?: string = '';

  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() value = '';
  @Input() disabled = false;

  @Input() icon?: string = '';
  @Input() iconPosition?: 'left' | 'right' = 'left';
  @Input() iconCssClass = '';

  public styleClass =
    'block font-inter font-light text-bodySmall rounded-md w-full';

  public iconStyleClass = '';

  ngOnInit(): void {
    this.iconStyleClass =
      this.iconPosition === 'left'
        ? 'absolute left-3 top-1/2 -translate-y-1/2 text-black text-opacity-30 pointer-events-none'
        : 'absolute right-3 top-1/2 -translate-y-1/2 text-black text-opacity-30 cursor-pointer hover:text-brandPrimary duration-300';
  }

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
