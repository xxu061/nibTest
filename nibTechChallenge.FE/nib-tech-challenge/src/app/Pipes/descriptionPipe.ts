import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'descriptionFilter' })
export class DescriptionFilterPipe implements PipeTransform {
  transform(value: string): string {
    if (value === undefined || value.length <= 130) {
      return value;
    } else {
      return value.substr(0, 130) + '...';
    }
  }
}
