import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../models/user';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './railway.css']
})

export class LoginComponent {
  constructor(private userService: UserService) {
  }

  onSubmit(f: NgForm) {
    const user = {username: f.value.username, password: f.value.password};
    this.userService.login(user);
  }
}
