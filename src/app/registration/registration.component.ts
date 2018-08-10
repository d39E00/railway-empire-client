import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../service/user.service';
import swal from 'sweetalert2';

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
        console.log(response);
        swal({
          title: 'Congratulations!', text: 'You have been registered successfully!', type: 'success'
        });
      },
      error => {
        swal({
          title: 'Oops..', text: error.error.message.toString().split('[MESSAGE]:')[1], type: 'error'
        });
      });
  }
}
