import { Test, TestingModule } from '@nestjs/testing';
import { HaulageService } from './houlage.service';

describe('HoulageService', () => {
  let service: HaulageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HaulageService],
    }).compile();

    service = module.get<HaulageService>(HaulageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
