import { UserRepository } from '@tmp-api/user/user.repository';
import { clearToken, getToken } from '@tmp-shared/utils';
import { catchError, map, Observable, of } from 'rxjs';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '@tmp-shared/services';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userRepo: UserRepository,
              private userService: UserService,
              private router: Router) {}

  public canActivate(): Observable<boolean> | boolean {
    const token = getToken();
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return this.userRepo.getUserInfo().pipe(
        map((response) => {
          this.userService.user = response;
          return true;
        }),
        catchError((): Observable<boolean> => {
          this.router.navigate(['/login']);
          clearToken();
          return of(false);
        }),
      );
    }
  }
}
