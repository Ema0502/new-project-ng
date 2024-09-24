import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { AuthGuard } from "../auth/auth-guard";
import { DetailProductComponent } from "../cards/card/detail-product/detail-product.component";
import { UpdateProductComponent } from "../update-product/update-product.component";
import { CreateProductComponent } from "../create-product/create-product.component";

const routes: Routes = [
    {
        path: "home",
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: "products/:id",
                component: DetailProductComponent
            },
            {
                path: "products/:id/update",
                component: UpdateProductComponent
            },
            {
                path: "createProduct",
                component: CreateProductComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class HomeRutesModule { }