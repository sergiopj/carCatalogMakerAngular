import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';

(window as any).global = window;

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'Hc25LHIsFYXT0C1GUtD5k3jrxMW0oF5P',
    domain: 'catalog-maker.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://catalog-maker.eu.auth0.com/userinfo',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

}