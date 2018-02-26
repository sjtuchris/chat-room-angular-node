import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { User } from '../model/user';

@Injectable()
export class UserService {

  currentUser: User;
  constructor(private http: HttpClient) { }

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

  logout(): void {
    this.currentUser = null;
    // navigate to login page
  }

  isLoggedIn(): boolean {
    return false;
  }
}
