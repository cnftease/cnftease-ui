import { TestBed } from '@angular/core/testing';

import { BlockfrostService } from './blockfrost.service';

describe('BlockfrostService', () => {
  let service: BlockfrostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockfrostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
