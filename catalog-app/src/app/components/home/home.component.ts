import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public year = new Date().getFullYear();

  constructor( ) {
  }

  login() {
  }

  logout() {
  }

}
