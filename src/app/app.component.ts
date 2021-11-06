import { Component } from '@angular/core';

@Component({
  selector: 'tmp-root',
  template: `
    <div class="root">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: ['.root { height: 100vh; }'],
})
export class AppComponent {}
