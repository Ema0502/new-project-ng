import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createResponse } from './create-response.model';
import { Observable } from 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {
  
  constructor(private http: HttpClient) { }

  createUser = (userName: string,firstName: string, lastName: string, birth: Date, email: string, password: string, role: string): Observable<createResponse> => {
    const user = {
      userName,
      firstName,
      lastName,
      birth,
      email,
      password,
      role
    }
    return this.http.post<createResponse>("http://localhost:3000/createUser", user);
  }
}
