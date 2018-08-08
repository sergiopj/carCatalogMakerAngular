
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// services
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _userService: UserService
  ) { }

  ngOnInit() {
  }

  // methods
  loginUser(event) {
    event.preventDefault();
    const email = event.target.querySelector('#inputEmail').value;
    const password = event.target.querySelector('#inputPassword').value;
    const data = {
      'email': email,
      'password': password
    };
    // send json and cypher password
    this._userService.getUserStatus(data);
  }
}
