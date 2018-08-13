import { Component, OnInit } from '@angular/core';
// services
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    
  public loginStatus;
 
  // need load loginStatus value at start 
  ngOnInit() {
    // on init?
    this.loginStatus = this.userService.dataOk;
  }

  constructor( private userService: UserService) {
  }

}
