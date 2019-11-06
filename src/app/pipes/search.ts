  
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  public transform(value, args: string) {
    //   el value es el array de usurios y args( argumentos) sería el nombre de los amigos que busco
    if (!value) {
      return;
    //   chequea si si viene vacio el array
    }
    if (!args) {
      return value;
      // si no hay argumentos devuelve value, es decir el array con la lista de amigos
    }
    args = args.toLowerCase();
    //para que compare todo en minusculas 
    return value.filter( (item) => {
      return JSON.stringify(item).toLowerCase().includes(args);
      // si le paso un objeto lo convierte en texto . includes chequea en el string que le pasamos si incluse la palabra que le pasamos en (args)
    });
  }
}