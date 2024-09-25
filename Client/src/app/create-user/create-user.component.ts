import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { createResponse } from './create-response.model';
import { CreateUserService } from './create-user.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  public form: FormGroup;
  constructor(private router: Router, private createUserService: CreateUserService, private authService: AuthService) {
    this.form = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      birth: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,  Validators.minLength(6), Validators.maxLength(20)]),
      role: new FormControl('', [Validators.required]),
    });
  }

  onSubmit = () => {
    if (this.form.valid) {
      const { userName, firstName, lastName, birth, email, password, role } = this.form.value;

    this.createUserService.createUser(userName, firstName, lastName, birth, email, password, role).subscribe((response: createResponse) => {
      if (response.access) {
        localStorage.setItem("user", JSON.stringify(response));
        this.authService.setUserLogged(true);
        this.router.navigate(["/home"]);
      }
      }, (error) => {
      console.log("error creating user ",error)
      });
    }
  }
}
