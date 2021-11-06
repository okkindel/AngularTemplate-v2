import { TranslateService } from '@ngx-translate/core';
import { clearToken } from '@tmp-shared/utils';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {
  HttpErrorResponse,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private translateService: TranslateService,
              private toastr: ToastrService,
              private router: Router) {}

  public intercept<T>(request: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    return next.handle(request).pipe(
      catchError((response: HttpErrorResponse) => {
        this._showErrorToast(response);
        if (response.status === 401) {
          this.router.navigate(['/login']);
          clearToken();
        }
        return throwError(() => response);
      }),
    );
  }

  private _showErrorToast(res: HttpErrorResponse): void {
    const apiError = res.error.error;
    const errorMessage = apiError.errorMessage
      ? `API_ERROR.${apiError.errorMessage}`
      : 'UNKNOWN_ERROR';
    const translatedError = this.translateService.instant(errorMessage);
    this.toastr.error(translatedError);
  }
}
