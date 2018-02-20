import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../model/user';

@Injectable()
export class UserService {

  currentUser: User;
  constructor() { }

  getUser(userId: string): Observable<User> {
    return null;
    
  }

  setCurrentUser(user: User): void {
    this.currentUser = user;
  }

  login(password: string): boolean {
    return false;
  }

  logout(): void {
    this.currentUser = null;
    // navigate to login page
  }
}
