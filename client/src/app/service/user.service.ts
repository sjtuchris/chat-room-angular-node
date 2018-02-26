import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { User } from '../model/user';
import { RegisterUser } from '../model/register-user';

@Injectable()
export class UserService {
  
  baseURL: string = 'http://localhost:3000';

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

  register(username: string, password: string): Observable<User> {
    const body = {username: username, password: password}
    return this.httpClient.post<User>(this.baseURL + '/users/create', body);
  }

  logout(): void {
    this.currentUser = null;
    // navigate to login page
  }

  isLoggedIn(): boolean {
    return false;
  }
}
