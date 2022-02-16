import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredCountry: any) {
    if (value.length === 0 || filteredCountry === '' || filteredCountry === undefined) {
      return value;
    }
    const countries = [];
    for (const country of value) {
      if (country.toLocaleLowerCase().startsWith(filteredCountry.toLocaleLowerCase())) {
        countries.push(country);
      }
    }
    return countries;
  }

}
