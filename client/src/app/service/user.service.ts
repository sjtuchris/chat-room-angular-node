import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { User } from '../model/user';
import { RegisterUser } from '../model/register-user';

@Injectable()
export class UserService {
  
  baseURL: string = 'localhost:3000';

  currentUser: User;
  constructor(private httpClient: HttpClient) { }

  getUser(userId: string): User {
    return null;
  }

  setCurrentUser(user: User): void {
    this.currentUser = user;
  }

  login(username: string, password: string): boolean {
    // this.http.get<User>("/user/login").subscribe(data => {
    //   // 前后端统一接口
    // })
    return false;
  } 

  register(user: RegisterUser): void {
    this.httpClient.post(this.baseURL + '/users/create', JSON.stringify(user)).subscribe((data) => {
      console.log(data);
    })
  }

  logout(): void {
    this.currentUser = null;
    // navigate to login page
  }

  isLoggedIn(): boolean {
    return false;
  }
}
