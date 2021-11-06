import { clearToken } from '@tmp-shared/utils';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tmp-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(private router: Router) {}

  public logout(): void {
    this.router.navigate(['/login']);
    clearToken();
  }
}
