import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'my-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
  model: any = {};

  onSubmit(f: NgForm) {
    alert(f.value.login+f.value.password+f.value.firstName);  // { first: '', last: '' }
  }

}
