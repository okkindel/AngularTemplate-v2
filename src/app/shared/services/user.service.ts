import { Optional, User } from '@tmp-shared/models';
import { Injectable } from '@angular/core';
import { Role } from '@tmp-shared/enums';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user?: User;

  set user(data: Optional<User>) {
    this._user = data || undefined;
  }

  get user(): Optional<User> {
    return this._user || null;
  }

  public hasRole(roles: Role[] | `${Role}`[]): boolean {
    return !!this._user?.role && roles.includes(this._user.role);
  }
}
