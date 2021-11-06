import { DEFAULT_LANGUAGE, InternationalizationModule } from '@tmp-shared/global/i18n';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { ApiModule } from '@tmp-api/api.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    InternationalizationModule.forRoot({ locale_id: DEFAULT_LANGUAGE }),
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    HomeModule,
    AuthModule,
    ApiModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
