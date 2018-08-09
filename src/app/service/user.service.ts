import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) {
  }

  URL_REGISTRATION = 'http://localhost:8000/registration';
  URL_LOGIN = 'http://localhost:8000/login';
  URL_PROFILE_UPDATE = 'http://localhost:8000/home/update';
  URL_PROFILE_GET = 'http://localhost:8000/home/profile/get';


  login(user) {
    this.authService.authorize(user);
    const body = 'username=' + user.username + '&password=' + user.password;
    return this.httpClient.post(this.URL_LOGIN, body, { headers: this.authService.getHeader(), responseType: 'text'});
  }

  registration(user) {
    return this.httpClient.post(this.URL_REGISTRATION, user, { headers: this.authService.getHeader(), responseType: 'text'});
  }

  editProfile(user) {
    return this.httpClient.put(this.URL_PROFILE_UPDATE, user, { headers: this.authService.getHeader(), responseType: 'text'});
  }

  getProfile() {
    return this.httpClient.get(this.URL_PROFILE_GET, { headers: this.authService.getHeader(), responseType: 'text'});
  }
}
