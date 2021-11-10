import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts = [];
    for (const post of value) {
      if (post.Email.toLowerCase().indexOf(arg) > -1 || post.nombres.toLowerCase().indexOf(arg) > -1
      || post.usuario.toLowerCase().indexOf(arg) > -1 || post.apellidos.toLowerCase().indexOf(arg) > -1 ) {
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }

}