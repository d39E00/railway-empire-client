import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private userService: UserService,
              private router: Router,
              private authService: AuthenticationService) {
  }

  onSubmit(f: NgForm) {
    const user = {username: f.value.username, password: f.value.password};
    this.userService.login(user).subscribe(
      response => {
        this.authService.authorize(user, response);
        console.log(response);
        this.router.navigateByUrl('/home');
      },
      error => {
        f.value.password = '';
        f.value.login = '';
        swal({
          title: 'Oops..', text: error.error.message.toString().split('[MESSAGE]:')[1], type: 'error'
        });
      });
  }
}
