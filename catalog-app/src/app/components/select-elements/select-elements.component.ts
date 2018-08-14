import { Component, OnInit } from '@angular/core';
// services
import { AuthService } from '../../services/auth.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-select-elements',
  templateUrl: './select-elements.component.html',
  styleUrls: ['./select-elements.component.css']
})
export class SelectElementsComponent implements OnInit {

  public loginStatus: boolean;
  private currentDate: string;

  constructor( private _authService: AuthService,
               private _utilsService: UtilsService ) {
  }

  // need load loginStatus value at start
  ngOnInit() {
    // on init?
    this.loginStatus = this._authService.dataOk;
    this.currentDate = this._utilsService.currentDate();
  }

}
