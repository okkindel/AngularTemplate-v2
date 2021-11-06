import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AuthRepository } from './auth/auth.repository';
import { UserRepository } from './user/user.repository';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const REPOSITORIES = [
  AuthRepository,
  UserRepository,
]

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    ...REPOSITORIES,
    {
      useClass: HttpErrorInterceptor,
      provide: HTTP_INTERCEPTORS,
      multi: true,
    },
    {
      useClass: LoaderInterceptor,
      provide: HTTP_INTERCEPTORS,
      multi: true,
    },
    {
      useClass: TokenInterceptor,
      provide: HTTP_INTERCEPTORS,
      multi: true,
    },
  ],
})
export class ApiModule {}
