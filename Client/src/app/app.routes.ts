import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreateUserComponent } from './create-user/create-user.component';

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
        path: "createUser",
        component: CreateUserComponent
    },
];
