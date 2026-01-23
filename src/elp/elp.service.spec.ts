import { Test, TestingModule } from '@nestjs/testing';
import { ElpService } from './elp.service';

describe('ElpService', () => {
  let service: ElpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElpService],
    }).compile();

    service = module.get<ElpService>(ElpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
