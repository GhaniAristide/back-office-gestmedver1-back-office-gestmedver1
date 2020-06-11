import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'andSoOn'
})
export class AndSoOnPipe implements PipeTransform {

  transform(value: string, newLength:number): any {
    if(!value || value.length <= newLength) {
      return value;
    }
    const newValue: string = value.substring(0, newLength) + ' ...';
    return newValue;
  }

}
