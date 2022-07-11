import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CalculateBmiDto } from './calculate-bmi.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('calculate-bmi')
  calculateBMI(@Body() calculateBmiDto: CalculateBmiDto) {
    const bmi = this.appService.calculateBMI(
      calculateBmiDto.height,
      calculateBmiDto.weight,
    );

    return { bmi: bmi.toFixed(1) };
  }
}
