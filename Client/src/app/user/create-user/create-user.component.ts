import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { createResponse } from './create-response.model';
import { CreateUserService } from './create-user.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private router: Router, 
    private createUserService: CreateUserService, 
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {
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

  ngOnInit(): void {
    
  }

  onSubmit = () => {
    if (this.form.valid) {
      const { userName, firstName, lastName, birth, email, password, role } = this.form.value;

      this.createUserService.createUser(userName, firstName, lastName, birth, email, password, role).subscribe({
        next: (response: createResponse) => {
          if (response.access) {
            this.snackBar.open("User created successfully!", "Close", {
              duration: 4000,
              verticalPosition: "bottom",
              horizontalPosition: "right",
            });
            localStorage.setItem("user", JSON.stringify(response));
            this.authService.setUserLogged(true);
            this.router.navigate(["/home"]);
          }
        },
        error: (error) => {
          console.log("error creating User", error);
          this.snackBar.open("Error creating User.", "Close", {
            duration: 4000,
            verticalPosition: "bottom",
            horizontalPosition: "right",
          });
        }
      });
    }
  }
}
