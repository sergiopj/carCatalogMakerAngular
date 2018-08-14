import { Component, OnInit } from '@angular/core';

// services
import { AuthService } from '../../services/auth.service';


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
    this.loginStatus = this._authService.dataOk;
  }

  constructor( private _authService: AuthService) {
  }

}
