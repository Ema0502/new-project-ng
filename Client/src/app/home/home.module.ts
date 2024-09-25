import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardsComponent } from '../cards/cards.component';
import { CardComponent } from '../cards/card/card.component';
import { CreateProductComponent } from '../create-product/create-product.component';
import { DetailProductComponent } from '../cards/card/detail-product/detail-product.component';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { HomeRutesModule, homeRoutes } from './home.routes';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    CardsComponent,
    CardComponent,
    CreateProductComponent,
    DetailProductComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(homeRoutes),
    HomeRutesModule
  ]
})
export class HomeModule { }
