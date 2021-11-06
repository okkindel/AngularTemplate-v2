import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import app_version from './assets/version.json';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

console.info('FRONTEND VERSION:', { ...app_version, build: environment.build });
