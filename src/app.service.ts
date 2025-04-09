import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  public name: string = "Landry"

  getHello(): string {
    return `I am ${this.name} and I'm working with NestJS ! WooW 🚀💡!`;
  }
}
