import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const checkPasswords: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const pass = control.parent?.get('password')?.value;
  const confirmPass = control.value;
  return pass === confirmPass ? null : { notSame: true };
};
