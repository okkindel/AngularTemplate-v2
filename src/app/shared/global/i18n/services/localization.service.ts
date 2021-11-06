import { LocalizationServiceConfig } from './localization-config.service';
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { catchError, NEVER, Observable } from 'rxjs';
import { DEFAULT_LANGUAGE } from '../constant';
import { CrmLang } from '../models';

@Injectable()
export class LocalizationService {
  private _localeId: CrmLang = DEFAULT_LANGUAGE;

  constructor(
    @Optional() @SkipSelf() private singleton: LocalizationService,
    private translateService: TranslateService,
    private config: LocalizationServiceConfig,
  ) {
    if (this.singleton) {
      throw new Error('Service is already provided by the root module');
    }
    this._localeId = this.config.locale_id as CrmLang;
  }

  public initService(): Observable<void> {
    this._localeId = (localStorage.getItem('language') || DEFAULT_LANGUAGE) as CrmLang;
    return this.useLanguage(this._localeId);
  }

  public useLanguage(lang: string): Observable<void> {
    this.translateService.setDefaultLang(lang);
    return this.translateService.use(lang).pipe(
      catchError(() => {
        localStorage.setItem('language', DEFAULT_LANGUAGE);
        location.reload();
        return NEVER;
      }),
    );
  }
}
