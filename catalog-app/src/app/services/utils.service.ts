import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  /* UTILS */

   // current date
  public currentDate = (): string => {

    const today = new Date();
    let currentDate: string;
    let dd: string;
    let mm: string;
    let yyyy: string;

    dd = today.getDate().toString();
    mm = (today.getMonth() + 1).toString(); // January is 0!
    yyyy = today.getFullYear().toString();

    if (Number(dd) < 10) {
        dd = `0${dd}`;
    }

    if (Number(mm) < 10) {
        mm = `0${mm}`;
    }

    return currentDate = `${dd}/${mm}/${yyyy}`;
  }

}
