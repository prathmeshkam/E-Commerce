import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (!value || !args || args.length === 0) return [];

    const lowerArgs = args.map(arg => arg.toLowerCase());
    if (lowerArgs.every(arg => arg === '')) return [];

    return value.filter((item: any) => {
      return lowerArgs.some(arg => JSON.stringify(item).toLowerCase().includes(arg));
    });
  }

}
