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
  private exist: boolean;

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

    this.exist = false;

    if ( this.selectedCarList.length > 0 ) {
      this.selectedCarList.forEach(element => {
        if (this.selectedCarList.indexOf(carModelData) >= 0) {
          this.exist = true;
        } else {
          this.exist = false;
        }
      });
    }

    if (!this.exist) {
      this.selectedCarList.push(carModelData);
    }
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
    const pdf = this._carDataService.sendData(this.selectedCarList);
    // console.log(pdf);
  }

}
