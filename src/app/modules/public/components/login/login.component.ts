import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "@public/services/auth.service";
import { tap } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent {
  formGroup: FormGroup = new FormGroup({
    ci: new FormControl('', [ Validators.required ]),
    password: new FormControl('', [ Validators.required ])
  });
  isLoading: boolean = false;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {
  }

  login() {
    this.isLoading = true;
    if (this.formGroup.invalid) {
      this.authService.showMessageDialog('Error', 'Ingrese los datos correctamente', 'error');
      this.isLoading = false;
      return;
    }
    const loginRequest = this.formGroup.value;
    this.authService.login(loginRequest).pipe(
      tap({
        next: (_) => {
          this.isLoading = false;
          this.router.navigate([ '../../private' ]);
        },
      })
    ).subscribe({
      error: (_) => {
        console.clear();
        this.isLoading = false;
      },
    });
  }

  get ci() {
    return this.formGroup.get('ci') as FormControl;
  }

  get password() {
    return this.formGroup.get('password') as FormControl;
  }
}
