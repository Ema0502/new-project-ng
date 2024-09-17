import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  public form: FormGroup;

  constructor(private authService: AuthService) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.form.valid) {
    const { email, password } = this.form.value;
    this.authService.signup(email, password).subscribe((response) => {
        localStorage.setItem("user", JSON.stringify(response));
        console.log('Signup successful', response);
      },
      (error) => {
        console.error('Signup failed', error);
      });
    }
  }
}