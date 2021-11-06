import { SharedModule } from '@tmp-shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsComponent } from './containers';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes = [
  {
    path: '',
    component: SettingsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
