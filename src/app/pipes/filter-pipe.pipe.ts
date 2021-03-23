import { Pipe, PipeTransform } from '@angular/core';
import { Vehicle } from '../models/vehicle';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Vehicle[], filterText: string): Vehicle[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
      return filterText?value
      .filter((v:Vehicle)=>v.vehicleName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
    }
  
  }
  