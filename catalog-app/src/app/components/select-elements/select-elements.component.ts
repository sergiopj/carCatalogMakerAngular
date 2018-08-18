import { Component, OnInit } from '@angular/core';
// services
import { AuthService } from '../../services/auth.service';
import { UtilsService } from '../../services/utils.service';
import { CarDataService } from '../../services/car-data.service';
import { timeout } from 'q';

@Component({
  selector: 'app-select-elements',
  templateUrl: './select-elements.component.html',
  styleUrls: ['./select-elements.component.css']
})
// tslint:disable-next-line
export class SelectElementsComponent implements OnInit {

  public loginStatus: boolean;
  private currentDate: string;
  private selectedCarList = [];


  constructor( private _authService: AuthService,
               private _utilsService: UtilsService,
               private _carDataService: CarDataService ) {

  }

  // need load loginStatus value at start
  ngOnInit() {
    // on init?
    this.loginStatus = this._authService.dataOk;
    this.currentDate = this._utilsService.currentDate();
    // promise resolve from getCarData()
    this._carDataService.getCarData().catch( error => {
      throw new Error('Get car data failed');
    });

    // use some equal to this to print in table car, find method search element in array or json
    // let employeeDB = employees.find(employee => employee.id === id);
    // fix to async and await here

  }
  // add car data to table
  addCarTable(carModelData) {
    this.selectedCarList.push(carModelData);
  }

  onChangeRate(event) {

    // to apply discount to the price
  
    console.log(event);
    // get price input value
    // const carPrice = 
  }

}
