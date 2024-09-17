import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  constructor(private authService: AuthService) {}

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signup(email, password).subscribe(response => {
      localStorage.setItem("user", JSON.stringify(response));
      console.log('Signup successful', response);
    }, error => {
      console.error('Signup failed', error);
    });
  }
}