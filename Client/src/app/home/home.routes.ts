import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CardsComponent } from "./cards/cards.component";

export const homeRoutes: Routes = [
    {
        path: "home",
        component: CardsComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [RouterModule]
})

export class HomeRutesModule { }