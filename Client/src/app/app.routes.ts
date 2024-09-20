import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DetailProductComponent } from './cards/card/detail-product/detail-product.component';
import { CreateProductComponent } from './create-product/create-product.component';

export const routes: Routes = [
    {
        path: "", 
        component: LandingPageComponent
    },
    {
        path: "login", 
        component: AuthComponent,
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "createUser",
        component: CreateUserComponent
    },
    {
        path: "products/:id",
        component: DetailProductComponent
    },
    {
        path: "createProduct",
        component: CreateProductComponent
    }
];
