import {Component} from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {


  ROLE_ADMIN: boolean;
  ROLE_USER: boolean;
  ROLE_MANAGER: boolean;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.ROLE_USER = this.authService.getUserRole();
    this.ROLE_MANAGER = this.authService.getManagerRole();
    this.ROLE_ADMIN = this.authService.getAdminRole();
  }

  logOut() {
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }

}

