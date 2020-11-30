import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'url'
})
export class UrlPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value ? new URL(value).hostname.replace('www.', '') : '';
  }
}
