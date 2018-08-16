import { Injectable } from '@angular/core';
// import url config file
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user-model';
import * as sha1 from 'js-sha1';


// config
import { URLS_CONFIGURATION } from '../common/config/urls-config';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor( private http: HttpClient) { }

  public dataOk: boolean;
  public data: any;

  // API get user status
  getUserStatus(loginFormData: any) {

    return new Promise( resolve => {
      this.http.get(URLS_CONFIGURATION.login, {
        params: {
          'email': loginFormData.email,
          'password': sha1(loginFormData.password)
        }
      })
      .subscribe( data => {   // data is already a JSON object
          console.log('Response data', data);
          this.dataOk = data['ok'];
          resolve(this.dataOk);
      });
    });
  }

   // to logout
  logOut() {
    this.dataOk = false;
  }

}
