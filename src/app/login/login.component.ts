import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './railway.css']
})

export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {
  }

  onSubmit(f: NgForm) {
    const user = {username: f.value.username, password: f.value.password};
    this.userService.login(user).subscribe(
      response => {
        alert(JSON.stringify(response));
        alert('Success');
        console.log(response);
        this.router.navigateByUrl('/audit');
      },
      err => {
        alert(JSON.stringify(err));
      });
  }
}
