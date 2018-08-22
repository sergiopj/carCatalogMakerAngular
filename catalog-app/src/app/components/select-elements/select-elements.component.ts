import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

/*MEJORAS
que no se repitan coches seleccionados puedo diferenciarlos por id
*/


export class SelectElementsComponent implements OnInit {   
  
  public loginStatus: boolean;
  private currentDate: string;
  private selectedCarList = [];  

  constructor( private _authService: AuthService,
               private _utilsService: UtilsService,
               private _carDataService: CarDataService,
               private changeDR: ChangeDetectorRef ) {

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
  }

  // add car data to table
  addCarTable(carModelData) {
    this.selectedCarList.push(carModelData);   
  }

  // to delete one row of the table
  deleteRow(index) {    
    this.selectedCarList.splice(index, 1);    
  }

  // replace prices in array data to send server
  addPrice(index, newValue) {    
    this.selectedCarList[index].current_price = newValue;
  }

  // to send array data to server and response pdf
  sendSelection() {    
    let pdf = this._carDataService.sendData(this.selectedCarList);
    console.log(pdf);
  }

}
