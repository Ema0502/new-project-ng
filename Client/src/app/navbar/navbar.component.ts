import { Component, OnInit } from '@angular/core';
import { navBarUser } from './navbar-user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  user: navBarUser | null = null;
  constructor (private router: Router) {
  }
  ngOnInit(): void {
    this.user = this.getUserLogin();
  }

  getUserLogin(): navBarUser | null {
    const userJson = localStorage.getItem("user");
    if (userJson) {
      try {
        return JSON.parse(userJson) as navBarUser;
      } catch (error) {
        console.error('Error parsing user from localStorage', error);
        return null;
      }
    }
    return null;
  }

  logOut(): void {
    localStorage.removeItem("user");
    this.user = null;
    this.router.navigate(['/home']);
  }
}
