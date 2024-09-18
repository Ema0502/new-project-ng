import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from './auth-response.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userLogged = new BehaviorSubject<boolean>(false);
  public userLogged$ = this.userLogged.asObservable();

  constructor(private http: HttpClient) {
    const user = localStorage.getItem("user");
    this.userLogged.next(user ? true : false);
  }

  signup = (email: string, password: string): Observable<AuthResponse> => {
    return this.http.post<AuthResponse>("http://localhost:3000/login", { email, password });
  }
  setUserLogged = (value: boolean) => {
    this.userLogged.next(value);
  }
}
