import { Component, OnInit } from '@angular/core';

// services
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public year;
  public loginStatus;
 
  // need load loginStatus value at start 
  ngOnInit() {
    // on init?
    this.year = new Date().getFullYear();
    this.loginStatus = this.userService.dataOk;
  }

  constructor( private userService: UserService) {
  }

  // to logout
  logOut() {
    this.userService.dataOk = false;
  }


  
}
