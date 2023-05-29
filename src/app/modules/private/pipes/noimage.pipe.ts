import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( image: any ): string {
    if ( !image ) {
      return './assets/images/profile/copa.png';
    }

    if ( image.length > 0) {
      return image.url;
    } else {
      return './assets/images/profile/copa.png';
    }
  }

}
