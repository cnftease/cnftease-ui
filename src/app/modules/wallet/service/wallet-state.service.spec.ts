import { TestBed } from '@angular/core/testing';

import { WalletStateService } from './wallet-state.service';

describe('WalletStateService', () => {
  let service: WalletStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalletStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
