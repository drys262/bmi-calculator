import { IsNumber } from 'class-validator';

export class CalculateBmiDto {
  @IsNumber()
  height: number;
  @IsNumber()
  weight: number;
}
