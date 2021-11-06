import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthRepository } from '@tmp-api/auth/auth.repository';
import { setToken } from '@tmp-shared/utils';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tmp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public form = new FormGroup({
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
  });

  constructor(private authRepo: AuthRepository, private router: Router) {}

  public onSubmit(): void {
    if (this.form.valid) {
      this.authRepo.login(this.form.value).subscribe(response => {
        if (!!response.token) {
          setToken(response.token);
          this.router.navigate(['/home']);
        }
      });
    }
  }
}
