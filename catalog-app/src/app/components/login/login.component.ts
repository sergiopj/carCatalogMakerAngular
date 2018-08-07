
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// services

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // methods
  loginUser(event) {

    event.preventDefault();
    const email = event.target.querySelector('#inputEmail').value;
    const password = event.target.querySelector('#inputPassword').value;

  }

}
