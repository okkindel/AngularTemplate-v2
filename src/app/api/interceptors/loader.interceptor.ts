import { LoaderService } from '@tmp-shared/global/loader';
import { Observable, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private readonly loaderService: LoaderService) {}

  public intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    const spinnerSubscription: Subscription = this.loaderService.spinner$.subscribe();
    return next.handle(req).pipe(finalize(() => spinnerSubscription.unsubscribe()));
  }
}
