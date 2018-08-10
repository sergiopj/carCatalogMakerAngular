import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // to detect changes on webpage
})
export class AppComponent {
  constructor(private changeDR: ChangeDetectorRef) { }

  title = 'app';

    /* detect changes methods */

  // stop all
  detach () {
    this.changeDR.detach();
  }

  // reattach
  reattach () {
    this.changeDR.reattach();
  }

  // detect changes
  detectChanges () {
    this.changeDR.detectChanges();
  }

}
