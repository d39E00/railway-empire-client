import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  firstName = '';
  lastName = '';
  login = '';
  birthDay = '';
  sex = '';

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    const user = this.userService.getProfile();
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.login = user.login;
    this.birthDay = user.birthDay;
    this.sex = user.sex;
  }

  onSubmit(f: NgForm) {
    const user = {
      firstName: f.value.firstName,
      lastName: f.value.lastName,
      login: f.value.login,
      birthDay: f.value.birthDay,
      sex: f.value.sex
    };
    this.userService.editProfile(user);
  }
}
