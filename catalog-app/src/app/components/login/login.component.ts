
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// services
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private noLoginMessage: string;
  private showsLoginMessage: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _userService: UserService,
    private changeDR: ChangeDetectorRef
  ) {}

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
    this._userService.getUserStatus(data);
    // fix to async and await here
    setTimeout (() => {
      this._userService.dataOk ? this.router.navigate(['home'])
          : this.showsLoginMessage = true;
          this.changeDR.detectChanges();
    }, 100);
  }

}
