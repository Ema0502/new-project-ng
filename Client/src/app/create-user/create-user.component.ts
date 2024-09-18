import { Component } from '@angular/core';
import { CreateUserService } from './create-user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  constructor(private createUserService: CreateUserService) {}

  onSubmit = (form: NgForm) => {
    const userName = form.value.userName;
    const birth = form.value.bith;
    const email = form.value.email;
    const password = form.value.password;

    this.createUserService.createUser(userName, birth, email, password).subscribe((response) => {
      return response;
    }, (error) => {
      console.log("error creating user ",error)
    });
  }
}
