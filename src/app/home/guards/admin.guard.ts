import { UserService } from '@tmp-shared/services';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Role } from '@tmp-shared/enums';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private userService: UserService) {}

  public canActivate(): boolean {
    return this.userService.hasRole([Role.ADMIN]);
  }
}
