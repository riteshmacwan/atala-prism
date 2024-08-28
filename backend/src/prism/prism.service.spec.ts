import { Test, TestingModule } from '@nestjs/testing';
import { PrismService } from './prism.service';

describe('PrismService', () => {
  let service: PrismService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismService],
    }).compile();

    service = module.get<PrismService>(PrismService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
