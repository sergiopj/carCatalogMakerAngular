import { Injectable } from '@angular/core';
// import url config file
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user-model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { }

  // API get user status
  public getUserStatus(loginFormData: any) {

    this.http.post('http://localhost:3000/login', {
      params: {
        'email': loginFormData.email,
        'password': loginFormData.password
      }
    })
    .subscribe(data => {   // data is already a JSON object
        console.log('Datos', data);
    });

}}
