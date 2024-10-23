import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth-guard';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "login", 
        component: AuthComponent,
    },
    {
        path: "home",
        canActivate: [AuthGuard],
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
    },
    {
        path: "products",
        canActivate: [AuthGuard],
        loadChildren: () => import("./product/product.module").then(m => m.ProductModule)
    },
    {
        path: "user",
        canActivate: [AuthGuard],
        loadChildren: () => import("./user/user.module").then(m => m.UserModule)
    }
];
