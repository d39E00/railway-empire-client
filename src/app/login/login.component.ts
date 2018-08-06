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
    const user = new User(null, null, f.value.login, f.value.password, null, null);
    this.userService.login(user);
  }
}
