import { Test, TestingModule } from '@nestjs/testing';
import { HoulageController } from './houlage.controller';
import { HoulageService } from './houlage.service';

describe('HoulageController', () => {
  let controller: HoulageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HoulageController],
      providers: [HoulageService],
    }).compile();

    controller = module.get<HoulageController>(HoulageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
