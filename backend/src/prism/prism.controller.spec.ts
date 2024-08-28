import { Test, TestingModule } from '@nestjs/testing';
import { PrismController } from './prism.controller';

describe('PrismController', () => {
  let controller: PrismController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrismController],
    }).compile();

    controller = module.get<PrismController>(PrismController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
