import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// config
import { URLS_CONFIGURATION } from '../common/config/urls-config';

@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line
export class CarDataService {

  public carData;

  constructor(private http: HttpClient) { }

  // method getcardata return data in resolve of promise
  getCarData () {
    return new Promise( resolve => {
      this.http.get(URLS_CONFIGURATION.getAllCars)
      .subscribe( data => {   // data is already a JSON object
          this.carData = data;
          // console.log('Api car data', this.carData);
          console.log('DATA', this.carData);
          resolve (this.carData);
      });
    });
  }
}
