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
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './cards/card/card.component';
import { CardsService } from './cards/cards.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateUserService } from './create-user/create-user.service';
import { DetailProductComponent } from './cards/card/detail-product/detail-product.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LandingPageComponent,
    HomeComponent,
    NavbarComponent,
    CardsComponent,
    CardComponent,
    CreateUserComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, 
    CardsService,
    CreateUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }