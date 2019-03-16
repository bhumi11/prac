import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../manage-vacancy/employee.model';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  public transform (value: Employee[], searchText: string, fieldName: string): Employee[] {
    if (!value) { return []; }
    if (!searchText) { return value; }
    console.log('value--', value);
    console.log('searchText--', searchText);
    console.log('fieldName--', fieldName);
    searchText = searchText.toLowerCase();
    for (const index of value) {
      return value.filter((it: Employee) => {
        return it.domain.toLowerCase().includes(searchText);

      });

    }
  }

}
