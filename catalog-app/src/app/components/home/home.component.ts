import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public year = new Date().getFullYear();

  constructor( private auth: AuthService ) {
    auth.handleAuthentication();
  }

  login() {
    console.log('dentro');
    this.auth.login();
  }

  logout() {
    console.log('salgo');
    this.auth.logout();
  }

}
