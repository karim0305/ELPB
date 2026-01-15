import { Test, TestingModule } from '@nestjs/testing';
import { MillinfoController } from './millinfo.controller';
import { MillinfoService } from './millinfo.service';

describe('MillinfoController', () => {
  let controller: MillinfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MillinfoController],
      providers: [MillinfoService],
    }).compile();

    controller = module.get<MillinfoController>(MillinfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
