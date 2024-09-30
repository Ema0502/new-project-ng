import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { userRoutes, UserRutesModule } from './user.routes';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateUserService } from './create-user/create-user.service';
import { CustomInputModule } from '../shared/custom-input.module';



@NgModule({
  declarations: [
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(userRoutes),
    UserRutesModule,
    CustomInputModule
  ],
  providers: [
    CreateUserService,
  ]
})
export class UserModule { }
