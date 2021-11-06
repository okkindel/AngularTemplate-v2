import { UserService } from '@tmp-shared/services';
import { Component } from '@angular/core';

@Component({
  selector: 'tmp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private userService: UserService) {}

  get username(): string {
    return this.userService.user?.name || '';
  }
}
