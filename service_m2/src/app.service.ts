import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  filterArray(data: Array<any>): Array<any> {
    return data.filter((item) => {
      if (!!item) {
        return item;
      }
    });
  }
}
