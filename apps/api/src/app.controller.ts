import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CalculateBmiDto } from './calculate-bmi.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('calculate-bmi')
  calculateBMI(@Body() calculateBmiDto: CalculateBmiDto) {
    const { type } = calculateBmiDto;
    let bmi;

    if (type === 'metric') {
      bmi = this.appService.calculateBMIByMetricUnit(
        calculateBmiDto.height,
        calculateBmiDto.weight,
      );
    } else {
      bmi = this.appService.calculateBMIByUSUnit(
        calculateBmiDto.height,
        calculateBmiDto.weight,
      );
    }

    return { bmi: bmi.toFixed(1) };
  }
}
