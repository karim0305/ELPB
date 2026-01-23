import { Test, TestingModule } from '@nestjs/testing';
import { ElpController } from './elp.controller';
import { ElpService } from './elp.service';

describe('ElpController', () => {
  let controller: ElpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ElpController],
      providers: [ElpService],
    }).compile();

    controller = module.get<ElpController>(ElpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
