import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const inputRoutes: Routes = [

];

@NgModule({
    imports: [
        RouterModule.forChild(inputRoutes)
    ],
    exports: [RouterModule]
})

export class CustomInputRutesModule { }