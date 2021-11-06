import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ConfirmDialogComponent } from './components';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './global/material';
import { LoaderComponent } from './global/loader';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { HasRoleDirective } from './directives';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [LoaderComponent, HasRoleDirective, ConfirmDialogComponent],
  imports: [
    ToastrModule.forRoot(),
    InfiniteScrollModule,
    BreadcrumbModule,
    TranslateModule,
    MaterialModule,
    CommonModule,
  ],
  exports: [
    ConfirmDialogComponent,
    InfiniteScrollModule,
    BreadcrumbModule,
    HasRoleDirective,
    TranslateModule,
    MaterialModule,
  ],
})
export class SharedModule {}
