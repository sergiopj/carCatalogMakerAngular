
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// services
import { AuthService } from '../../services/auth.service';

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
    private _authService: AuthService,
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
    this._authService.getUserStatus(data).then( resolve => {
      resolve ? this.router.navigate(['home'])
          : this.showsLoginMessage = true;
          this.changeDR.detectChanges();
    }).catch( error => {
      throw new Error('Auth service failed');
    });
  }

}
