import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  calculateBMIByMetricUnit(height: number, weight: number) {
    return weight / Math.pow(height / 100, 2);
  }

  calculateBMIByUSUnit(height: number, weight: number) {
    return 703 * (weight / Math.pow(height, 2));
  }
}
