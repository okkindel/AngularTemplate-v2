import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  LoginComponent,
} from './containers';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
