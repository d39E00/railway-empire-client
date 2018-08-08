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
        }, responseType: 'text'
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

  editProfile(user) {
    // '/home/update'
    alert(JSON.stringify(user));
  }

  getProfile() {
    // '/home/profile/get'
    const user = {
      firstName: 'Elinas',
      lastName: 'Valieva',
      login: 'login@mail.ru',
      birthDay: '06.07.1995',
      sex: 'female'
    };
    return user;
  }
}
