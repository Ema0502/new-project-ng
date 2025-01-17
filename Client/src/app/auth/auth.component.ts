import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { AuthResponse } from './auth-response.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  public form: FormGroup;
  public initialAccess: string | null;

  constructor(private authService: AuthService, private router: Router) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,  Validators.minLength(6), Validators.maxLength(20)])
    });
    this.initialAccess = localStorage.getItem("user");
    if (this.initialAccess) this.router.navigate(["/home"]);
  }

  onSubmit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.authService.signup(email, password).subscribe((response: AuthResponse) => {
        if (response.access) {
          localStorage.setItem("user", JSON.stringify(response));
          localStorage.setItem("userId", response.id);
          this.authService.setUserLogged(true);
          this.router.navigate(["/home"]);
        }
      },
      (error) => {
        console.error('Signup failed', error);
      });
    }
  }
}