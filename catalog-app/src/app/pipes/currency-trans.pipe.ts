import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyTrans'
})
export class CurrencyTransPipe implements PipeTransform {

  transform(value: string, arg: string): string {   
    let str: string;   
    arg === 'eur' ? 
      str = value.toString().replace(/\./g, '').toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' €'
                    :
      str = value.toString().replace(/\./g, '').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' $'    
    return str;
  }

}
