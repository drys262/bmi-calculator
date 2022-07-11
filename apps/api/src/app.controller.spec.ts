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
    it('should pass', () => {
      const inputs = { height: 165, weight: 85 };
      expect(appController.calculateBMI(inputs).bmi).toBe('31.2');
    });
  });
});
