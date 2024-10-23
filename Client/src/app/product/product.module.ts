import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { productRoutes, ProductRutesModule } from './product.routes';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { UpdateProductService } from './update-product/update-product.service';
import { DetailProductService } from './detail-product/detail-product.service';
import { CreateProductService } from './create-product/create-product.service';
import { CustomInputModule } from '../shared/custom-input.module';



@NgModule({
  declarations: [
    CreateProductComponent,
    DetailProductComponent,
    UpdateProductComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(productRoutes),
    ProductRutesModule,
    CustomInputModule
  ],
  providers:[
    DetailProductService,
    CreateProductService,
    UpdateProductService
  ]
})
export class ProductModule { }
