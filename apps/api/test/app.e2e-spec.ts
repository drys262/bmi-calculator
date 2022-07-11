import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/calculate-bmi - metric unit type (POST)', () => {
    return request(app.getHttpServer())
      .post('/calculate-bmi')
      .send({ height: 165, weight: 85, type: 'metric' })
      .expect(201)
      .expect({
        bmi: '31.2',
      });
  });

  it('/calculate-bmi - us unit type (POST)', () => {
    return request(app.getHttpServer())
      .post('/calculate-bmi')
      .send({ height: 64.9606, weight: 187.393, type: 'us' })
      .expect(201)
      .expect({
        bmi: '31.2',
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
