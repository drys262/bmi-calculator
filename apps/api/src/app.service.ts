import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  calculateBMI(height: number, weight: number) {
    return weight / Math.pow(height / 100, 2);
  }
}
