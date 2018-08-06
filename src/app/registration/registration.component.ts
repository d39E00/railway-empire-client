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
    const user = new User(f.value.firstName, f.value.lastName, f.value.login, f.value.password, null, null);
    this.userService.registration(user);
  }
}
