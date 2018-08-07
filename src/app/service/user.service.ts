import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RequestOptions} from '@angular/http';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  URL_REGISTRATION = 'http://localhost:8000/registration';
  URL_LOGIN = 'http://localhost:8000/login';
  URL_PROFILE_POST = 'http://localhost:8000/home/update';
  URL_PROFILE_GET = 'http://localhost:8000/home/update';


  login(user) {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    const base64Credential: string = btoa(user.username + ':' + user.password);
    headers.append('Authorization', 'Basic ' + base64Credential);
    this.httpClient.post(this.URL_LOGIN, {
      username: user.login,
      password: user.password
    }, {headers: headers})
      .subscribe(
        response => {
          alert('Success');
          console.log(response);
        },
        err => {
          alert(JSON.stringify(err));
        });
  }

  registration(user) {
    this.httpClient.post(this.URL_REGISTRATION, {
      firstName: user.firstName,
      lastName: user.lastName,
      login: user.login,
      password: user.password
    })
      .subscribe(
        response => {
          alert('Success');
          console.log(response);
        },
        err => {
          alert(JSON.stringify(err));
        });
  }

  edit(user) {
    this.httpClient.post(this.URL_PROFILE_POST, {
      firstName: user.firstName,
      lastName: user.lastName,
      login: user.login,
      password: user.password,
      birthDay: user.birthDay,
      sex: user.sex
    })
      .subscribe(
        response => {
          alert('Success');
          console.log(response);
        },
        err => {
          alert(JSON.stringify(err));
        });
  }

  profile() {
    this.httpClient.get(this.URL_PROFILE_GET);
  }
}
