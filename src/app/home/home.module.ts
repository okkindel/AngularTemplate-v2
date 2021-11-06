import { BreadcrumbsComponent, MenuComponent } from './components';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@tmp-shared/shared.module';
import { DashboardComponent } from './containers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [HomeRoutingModule, CommonModule, SharedModule],
  declarations: [DashboardComponent, MenuComponent, BreadcrumbsComponent],
})
export class HomeModule {}
