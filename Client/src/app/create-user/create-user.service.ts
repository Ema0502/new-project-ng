import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http: HttpClient) { }

  createUser = (userName: string, birth: Date, email: string, password: string) => {
    const user = {
      userName,
      birth,
      email,
      password
    }
    return this.http.post("http://localhost:3000/createUser", user);
  }
}
