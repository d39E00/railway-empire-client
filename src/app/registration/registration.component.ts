import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../models/user';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})

export class RegistrationComponent {

  constructor(private userService: UserService) {
  }

  onSubmit(f: NgForm) {
    const user = {
      firstName: f.value.firstName,
      lastName: f.value.lastName,
      login: f.value.login,
      password: f.value.password
    };
    this.userService.registration(user).subscribe(
      response => {
        alert('Success');
        console.log(response);
      },
      err => {
        alert(JSON.stringify(err));
      });
  }
}
