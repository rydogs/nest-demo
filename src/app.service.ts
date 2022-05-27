import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(name: String): string {
    return `Hello World! ${name}`;
  }
}
