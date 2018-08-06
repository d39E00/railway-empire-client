import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './railway.css']
})

export class LoginComponent {
  model: any = {};

  login() {
    alert('login ' + this.model.login);
  }

  onSubmit(f: NgForm) {
    alert(f.value.login + f.value.password);  // { first: '', last: '' }
  }
}
