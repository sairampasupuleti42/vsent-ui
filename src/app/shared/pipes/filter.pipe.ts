import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(textFields: string[], searchWord: string): any {
    return textFields.filter(val => val.toLowerCase().includes(searchWord));
  }

}
