import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsService } from './cards/cards.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateUserService } from './create-user/create-user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateProductService } from './update-product/update-product.service';
import { HomeModule } from './home/home.module';
import { HomeRutesModule } from './home/home.routes';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LandingPageComponent,
    NavbarComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HomeModule,
    HomeRutesModule
  ],
  providers: [
    AuthService, 
    CardsService,
    CreateUserService,
    UpdateProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }