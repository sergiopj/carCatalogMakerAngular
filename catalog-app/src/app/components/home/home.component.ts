import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public year = new Date().getFullYear();

  constructor( private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.auth.login();
  }

}
