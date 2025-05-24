import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-authentication-form',
  imports: [],
  standalone: true,
  templateUrl: './authentication-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticationFormComponent {
  @Input({ required: true }) activeTab: string = 'register';
}
