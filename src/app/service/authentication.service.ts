import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService {

  private login: string;
  private token: string;
  private roles = [];
  private ROLE_ADMIN: boolean;
  private ROLE_USER: boolean;
  private ROLE_MANAGER: boolean;

  constructor() {
  }

  authorize(user) {
    this.login = user.username;
    this.token = user.password;
    this.ROLE_ADMIN = true;
    this.ROLE_MANAGER = false;
    this.ROLE_USER = false;
    localStorage.setItem('token', btoa(this.login + ':' + this.token));
  }

  getHeader() {
    return {
      'Accept': 'application/json',
      'Authorization': 'Basic ' + localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'XMLHttpRequest'
    };
  }

  getHeaderPost() {
    return {
      'Accept': 'application/json',
      'Authorization': 'Basic ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    };
  }

  getHeaderUser() {
    return {
      'Accept': 'application/json',
      'Authorization': 'Basic ' + localStorage.getItem('token'),
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

