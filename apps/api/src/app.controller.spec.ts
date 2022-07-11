import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('Calculate BMI', () => {
    it('should pass (metric unit)', () => {
      const inputs = { height: 165, weight: 85, type: 'metric' };
      expect(appController.calculateBMI(inputs).bmi).toBe('31.2');
    });

    it('should pass (us unit)', () => {
      const inputs = { height: 64.9606, weight: 187.393, type: 'us' };
      expect(appController.calculateBMI(inputs).bmi).toBe('31.2');
    });
  });
});
