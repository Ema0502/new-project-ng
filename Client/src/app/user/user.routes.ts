import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateUserComponent } from "./create-user/create-user.component";

export const userRoutes: Routes = [
    {
        path: "createUser",
        component: CreateUserComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes)
    ],
    exports: [RouterModule]
})

export class UserRutesModule { }