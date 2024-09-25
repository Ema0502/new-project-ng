import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { AuthGuard } from "../auth/auth-guard";
import { DetailProductComponent } from "../cards/card/detail-product/detail-product.component";
import { UpdateProductComponent } from "../update-product/update-product.component";
import { CreateProductComponent } from "../create-product/create-product.component";
import { CreateUserComponent } from "../create-user/create-user.component";

export const homeRoutes: Routes = [
    {
        path: "home",
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: "createUser",
                component: CreateUserComponent,
                loadChildren: () => import("../create-user/create-user.component").then(m => m.CreateUserComponent)
            },
            {
                path: "products/:id",
                component: DetailProductComponent,
                loadChildren: () => import("../cards/card/detail-product/detail-product.component").then(m => m.DetailProductComponent)
            },
            {
                path: "products/:id/update",
                component: UpdateProductComponent,
                loadChildren: () => import("../update-product/update-product.component").then(m => m.UpdateProductComponent)
            },
            {
                path: "createProduct",
                component: CreateProductComponent,
                loadChildren: () => import("../create-product/create-product.component").then(m => m.CreateProductComponent)
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class HomeRutesModule { }