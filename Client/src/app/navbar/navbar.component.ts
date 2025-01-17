import { Component, OnInit } from '@angular/core';
import { navBarUser } from './navbar-user.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  user: navBarUser | null = null;
  
  constructor(private router: Router, private authService: AuthService, private location: Location) { }

  ngOnInit(): void {
    this.user = this.getUserLogin();
    this.authService.userLogged$.subscribe(isLogged => {
      if (isLogged) {
        this.user = this.getUserLogin();
      } else {
        this.user = null;
      }
    });
  }

  getUserLogin(): navBarUser | null {
    const userJson = localStorage.getItem("user");
    if (userJson) {
      try {
        return JSON.parse(userJson) as navBarUser;
      } catch (error) {
        console.error(error);
        return null;
      }
    }
    return null;
  }

  isAdmin(): boolean {
    return this.user?.role === 'admin';
  }

  logOut(): void {
    localStorage.removeItem("user");
    this.authService.setUserLogged(false);
    this.router.navigate(["/"]);
  }
  goBack(): void {
    this.location.back();
  }
}
