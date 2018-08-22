import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyTrans'
})
export class CurrencyTransPipe implements PipeTransform {

  transform(value: string, arg: string): string {   
    let str: string;        
    switch (arg) {
      case 'eur':
        str = value.toString().replace(/\./g, '').toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        break;
      case 'usd':
        str = value.toString().replace(/\./g, '').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); 
        break;    
      default:
        str = '';
        break;
    }    
    return str;
  }

}
