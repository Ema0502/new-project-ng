import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CreateUserService } from './create-user.service';
import { createResponse } from './create-response.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  public form: FormGroup;
  constructor(private createUserService: CreateUserService, private router: Router) {
    this.form = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      birth: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,  Validators.minLength(6), Validators.maxLength(20)])
    });
  }

  onSubmit = () => {
    if (this.form.valid) {
      const { userName, firstName, lastName, birth, email, password } = this.form.value;

    this.createUserService.createUser(userName, firstName, lastName, birth, email, password).subscribe((response: createResponse) => {
      if (response.access) {
        localStorage.setItem("user", JSON.stringify(response));
        this.createUserService.setUserLogged(true);
        this.router.navigate(["/home"]);
      }
      }, (error) => {
      console.log("error creating user ",error)
      });
    }
  }
}
