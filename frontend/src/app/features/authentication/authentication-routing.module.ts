import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';

export const routes: Routes = [
  {
    path: 'register',
    component: AuthenticationComponent,
  },
  {
    path: 'login',
    component: AuthenticationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
