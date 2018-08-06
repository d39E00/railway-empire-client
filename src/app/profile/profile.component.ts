import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {NgForm} from '@angular/forms';
import {User} from '../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  ngOnInit() {
  }

  constructor(private userService: UserService) {
    this.profile();
  }

  onSubmit(f: NgForm) {
    const user = new User(f.value.firstName, f.value.lastName, f.value.login, f.value.password, f.value.birthDay, f.value.sex);
    this.userService.edit(user);
  }

  profile() {
    this.userService.profile();
  }
}
