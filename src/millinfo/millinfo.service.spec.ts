import { Test, TestingModule } from '@nestjs/testing';
import { MillinfoService } from './millinfo.service';

describe('MillinfoService', () => {
  let service: MillinfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MillinfoService],
    }).compile();

    service = module.get<MillinfoService>(MillinfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
