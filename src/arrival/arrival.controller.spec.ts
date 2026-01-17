import { Test, TestingModule } from '@nestjs/testing';
import { ArrivalController } from './arrival.controller';
import { ArrivalService } from './arrival.service';

describe('ArrivalController', () => {
  let controller: ArrivalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArrivalController],
      providers: [ArrivalService],
    }).compile();

    controller = module.get<ArrivalController>(ArrivalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
