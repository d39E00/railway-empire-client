import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService {

  private login: string;
  private password: string;
  private ROLE_ADMIN: boolean;
  private ROLE_USER: boolean;
  private ROLE_MANAGER: boolean;

  constructor() {
  }

  authorize(user) {
    this.login = user.username;
    this.password = user.password;
    this.ROLE_ADMIN = false;
    this.ROLE_MANAGER = false;
    this.ROLE_USER = true;
  }

  getHeader() {
    return {
      'Accept': 'application/json',
      'Authorization': 'Basic ' + btoa(this.login + ':' + this.password),
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'XMLHttpRequest'
    };
  }

  getHeaderPost() {
    return {
      'Accept': 'application/json',
      'Authorization': 'Basic ' + btoa(this.login + ':' + this.password),
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    };
  }

  getHeaderUser() {
    return {
      'Accept': 'application/json',
      'Authorization': 'Basic ' + btoa('veaufa@mail.ru' + ':' + this.password),
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'XMLHttpRequest'
    };
  }

  getAdminRole() {
    return this.ROLE_ADMIN;
  }

  getManagerRole() {
    return this.ROLE_MANAGER;
  }

  getUserRole() {
    return this.ROLE_USER;
  }
}

