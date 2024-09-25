import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { CreateProductComponent } from './create-product/create-product.component';

export const productRoutes: Routes = [
    {
        path: "products/:id",
        component: DetailProductComponent,
    },
    {
        path: "products/:id/update",
        component: UpdateProductComponent,
    },
    {
        path: "createProduct",
        component: CreateProductComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(productRoutes)
    ],
    exports: [RouterModule]
})

export class ProductRutesModule { }