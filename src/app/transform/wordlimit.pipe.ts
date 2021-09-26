import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordlimit'
})
export class WordlimitPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    return value.split(' ').filter((e,i) => i<=limit).join(' ');
  }
}
