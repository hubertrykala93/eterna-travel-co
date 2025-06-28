import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './authentication-routing.module';

@NgModule({
  imports: [CommonModule, AuthRoutingModule],
  declarations: [],
})
export class AuthenticationModule {}
