import { Component } from '@angular/core';

// services
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor( private userService: UserService) {
  }

  // on init?
  public year = new Date().getFullYear();
  public loginStatus = this.userService.isAuth();

}
