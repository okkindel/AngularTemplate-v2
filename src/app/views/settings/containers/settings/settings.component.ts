import { Optional, User } from '@tmp-shared/models';
import { UserService } from '@tmp-shared/services';
import { Component } from '@angular/core';

@Component({
  selector: 'tmp-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(private userService: UserService) {}

  get user(): Optional<User> {
    return this.userService?.user;
  }
}
