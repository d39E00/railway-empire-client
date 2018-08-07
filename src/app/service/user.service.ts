import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  URL_REGISTRATION = 'http://localhost:8000/registration';
  URL_LOGIN = 'http://localhost:8000/login';
  URL_PROFILE_POST = 'http://localhost:8000/home/update';
  URL_PROFILE_GET = 'http://localhost:8000/home/update';


  login(user) {
    const body = 'username=' + user.username + '&password=' + user.password;
    this.httpClient.post(this.URL_LOGIN, body
      ,
      {
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Basic ' + btoa(user.username + ':' + user.password),
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
      .subscribe(
        response => {
          alert('Success');
          console.log(response);
        },
        err => {
          if (err.url === 'http://localhost:8000/login') {
            alert('access');
          } else {
            alert('error');
          }
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
