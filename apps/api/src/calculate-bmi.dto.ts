import { IsNumber, IsString } from 'class-validator';

export class CalculateBmiDto {
  @IsNumber()
  height: number;
  @IsNumber()
  weight: number;
  @IsString()
  type: 'metric' | 'us';
}
