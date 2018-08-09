import { Injectable } from '@angular/core';
// import url config file
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user-model';
import * as sha1 from 'js-sha1';
import { Router } from '@angular/router';

// config
import { URLS_CONFIGURATION } from '../common/config/urls-config';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient, private router: Router) { }

  public dataOk: boolean;

  // API get user status
  public getUserStatus(loginFormData: any) {

    this.http.get(URLS_CONFIGURATION.login, {
      params: {
        'email': loginFormData.email,
        'password': sha1(loginFormData.password)
      }
    })
    .subscribe(data => {   // data is already a JSON object
        console.log('Datos', data);
        this.dataOk = data['ok'];
        // refresh page to set value at variable, test methods of angular 6
    });
  }

  public isAuth() {
    // return true or false
      return this.dataOk;
  }

}
