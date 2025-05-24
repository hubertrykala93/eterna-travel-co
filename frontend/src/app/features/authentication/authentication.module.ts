import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, AuthenticationComponent],
  declarations: [],
})
export class AuthenticationModule {}
