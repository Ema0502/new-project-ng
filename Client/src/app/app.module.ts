import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { HomeRutesModule } from './home/home.routes';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { UserRutesModule } from './user/user.routes';
import { ProductRutesModule } from './product/product.routes';
import { SearchBarComponent } from './navbar/search-bar/search-bar.component';
import { SearchBarService } from './navbar/search-bar/search-bar.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    HomeModule,
    HomeRutesModule,
    UserModule,
    UserRutesModule,
    ProductModule,
    ProductRutesModule
  ],
  providers: [
    AuthService,
    SearchBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }