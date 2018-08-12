import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService {

  login = 'login@mail.ru';
  password = 'pass';

  constructor() {
  }

  authorize(user) {
    this.login = user.username;
    this.password = user.password;
  }

  getAuthorized() {
    return {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Basic ' + btoa(this.login + ':' + this.password),
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
      }, responseType: 'text'
    };
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
}

