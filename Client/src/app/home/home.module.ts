import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRutesModule, homeRoutes } from './home.routes';
import { CardsComponent } from './cards/cards.component';
import { CardsService } from './cards/cards.service';
import { CardComponent } from './cards/card/card.component';
import { UserModule } from '../user/user.module';
import { ProductModule } from '../product/product.module';
import { UserRutesModule } from '../user/user.routes';
import { ProductRutesModule } from '../product/product.routes';

@NgModule({
  declarations: [
    CardsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(homeRoutes),
    HomeRutesModule,
    UserModule,
    UserRutesModule,
    ProductModule,
    ProductRutesModule
  ],
  providers: [
    CardsService
  ]
})
export class HomeModule { }
