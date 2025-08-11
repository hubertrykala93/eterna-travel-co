import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { CurrencyCode } from '../../../../core/currency/currency.model';
import { LanguageCode } from '../../../../core/language/language.model';
import { DropdownButton } from '../dropdown-selector/dropdown-selector.model';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss',
  standalone: true,
  imports: [AsyncPipe, TranslatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuComponent {
  @Input({ required: true }) navigationButtons$!: Observable<DropdownButton[]>;

  @Output() codeEmitted: EventEmitter<LanguageCode | CurrencyCode> = new EventEmitter<LanguageCode | CurrencyCode>();

  protected onChange(code: LanguageCode | CurrencyCode): void {
    this.codeEmitted.emit(code);
  }
}
