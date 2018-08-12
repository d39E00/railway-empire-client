import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {NgForm} from '@angular/forms';
import swal from 'sweetalert2';
import {User} from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  firstName: string;
  lastName: string;
  login: string;
  birthDay: string;
  sex: string;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getProfile().subscribe(user => {
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.login = user.login;
      this.birthDay = user.birthDay;
      this.sex = user.sex;
    }, error => {
      alert(JSON.stringify(error));
      console.log(error);
      swal({
        title: 'Oops..', text: error.error.message.toString().split('[MESSAGE]:')[1], type: 'error'
      });
    });
  }

  onSubmit(f: NgForm) {
    const user = new User();
    user.firstName = f.value.firstName;
    user.lastName = f.value.lastName;
    user.login = f.value.login;
    user.birthDay = f.value.birthDay;
    user.sex = f.value.sex;
    this.userService.editProfile(user).subscribe(res => {
      console.log(res);
      swal({title: 'Congratulation!', text: 'You update your profile!', type: 'success'});
    }, error => {
      alert(JSON.stringify(error));
      console.log(error);
      swal({
        title: 'Oops..', text: error.error.message.toString().split('[MESSAGE]:')[1], type: 'error'
      });
    });
  }
}
