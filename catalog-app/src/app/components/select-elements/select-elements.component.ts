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
// tslint:disable-next-line
export class SelectElementsComponent implements OnInit { 

  
  
  public loginStatus: boolean;
  private currentDate: string;
  private selectedCarList = [];
  private finalPrice: number;

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
    this.changeDR.detectChanges();
  }

  onChangeCalc(event) {
    // to apply discount to the price
    // cada vez que se use esta funcion se recorre los elementos del array de tabla
    // y en cada vuelta se cakcule el price respecto al rate
    console.log(event.id.substr(-1));
    console.log('Array', this.selectedCarList[event.id.substr(-1)].current_price);


    this.changeDR.detectChanges();
    
   

  }




}
