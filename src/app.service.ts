import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloInJson(): object {
    return  {
      hello: 'world'
    }
  }
}
