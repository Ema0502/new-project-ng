import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CardComponent } from './card/card.component';
import { CardsService } from './cards/cards.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LandingPageComponent,
    HomeComponent,
    NavbarComponent,
    CardsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }