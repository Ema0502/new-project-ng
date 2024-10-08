import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';

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
    }
];
