import { Injectable } from '@angular/core';
// import url config file
import { Http, Response } from '@angular/http';
import { User } from '../models/user-model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: Http) { }


  // API get user status
  public getUserStatus(loginFormData: any) {

    console.log('BackData', loginFormData);

    this.http.get('http://localhost:3000/login', {
      params: {
        'email': loginFormData.email,
        'password': loginFormData.password
      }
    })
    .toPromise()
    .then(response => {
      console.log(response);
    })
    .catch(console.log);
  }

}
