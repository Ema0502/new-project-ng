import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CustomInputComponent } from '../shared/CustomInput/custom-input.component';
import { inputRoutes } from './custom-input.routes';



@NgModule({
  declarations: [
    CustomInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(inputRoutes),
  ],
  providers: [

  ],
  exports: [
    CustomInputComponent
  ]
})
export class CustomInputModule { }
