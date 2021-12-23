import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { Wallet } from '../models/Wallet';
import { WalletState } from '../models/WalletState';
import { initialState } from '../store/reducers/wallet.reducer';

import { WalletStateService } from './wallet-state.service';

fdescribe('WalletStateService', () => {
  let service: WalletStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({initialState})
      ]
    });
    service = TestBed.inject(WalletStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('WalletState should be array of wallets', () => {
    const walletState: WalletState = {
      wallets: [
        {
          address: 'addr1',
          name: 'batman',
          assets: [],
          stakeAddress: 'addr2',
        },
        {
          address: 'addr1',
          name: 'batman',
          stakeAddress: 'addr2'
        }
      ],
    }
    expect(walletState.wallets).toBeDefined();
  });

});