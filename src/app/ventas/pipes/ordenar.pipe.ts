import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
  name: 'ordenar'
})

export class OrdenarPipe implements PipeTransform{
  transform(values: string[]) {
    values.sort( function(a,b){
      return (a[0] > b[0]) ? 1 : -1;
    })
  }
}
