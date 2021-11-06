import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '@tmp-shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthCardComponent } from './components';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [ReactiveFormsModule, AuthRoutingModule, SharedModule, CommonModule],
  declarations: [AuthCardComponent, LoginComponent],
})
export class AuthModule {}
