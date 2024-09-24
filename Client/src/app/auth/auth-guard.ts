import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({providedIn: "root"})
export class AuthGuard implements CanActivate {

    constructor( private authService: AuthService, private router: Router ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
        return this.authService.userLogged$.pipe(
            map(user => {
                const isAuthenticated = !!user;
                return isAuthenticated ? true : this.router.createUrlTree(["login"]);
            })
        );
    }
}