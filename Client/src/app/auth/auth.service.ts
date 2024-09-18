import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from './auth-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup = (email: string, password: string): Observable<AuthResponse> => {
    return this.http.post<AuthResponse>("http://localhost:3000/login", { email, password });
  }
}
