import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  URL_REGISTRATION = 'http://localhost:8000/registration';
  URL_LOGIN = 'http://localhost:8000/login';
  URL_PROFILE_UPDATE = 'http://localhost:8000/home/update';
  URL_PROFILE_GET = 'http://localhost:8000/home/profile/get';


  login(user) {
    const body = 'username=' + user.username + '&password=' + user.password;
    return this.httpClient.post(this.URL_LOGIN, body,
      {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Basic ' + btoa(user.username + ':' + user.password),
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-Requested-With': 'XMLHttpRequest'
        }, responseType: 'text'
      });
  }

  registration(user) {
    return this.httpClient.post(this.URL_REGISTRATION, user);
  }

  editProfile(user) {
    return this.httpClient.put(this.URL_PROFILE_UPDATE, user);
  }

  getProfile() {
    return this.httpClient.get(this.URL_PROFILE_GET);
  }
}
