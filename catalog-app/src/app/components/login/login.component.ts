import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public year = new Date().getFullYear();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private user: UserService
  ) { }

  ngOnInit() {
  }

  // methods
  loginUser(e) {

    e.preventDefault();
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    // if login is ok navigate to dashboard
    if ( username === 'sergio@gmail.com' && password === 'pitus') {
      this.user.setUserLoggedIn();
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/login']);
    }

  }

}
