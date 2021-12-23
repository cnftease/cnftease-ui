import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { firstValueFrom, of } from 'rxjs';
import { Wallet } from '../models/Wallet';
import { MOCK_WALLETS, MOCK_WALLET_BOB } from '../spec/mocks';
import { initialState } from '../store/reducers/wallet.reducer';

import { WalletService } from './wallet.service';

fdescribe('WalletService', () => {
  let store: MockStore;
  let service: WalletService;
  let localStore: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        WalletService,
        provideMockStore({initialState})
      ]
    });
    service = TestBed.inject(WalletService);
    store = TestBed.inject(MockStore);
    localStore = {};
  
    spyOn(window.localStorage, 'getItem').and.callFake((key) =>
      key in localStore ? JSON.stringify(localStore[key]) : null
    );
    spyOn(window.localStorage, 'setItem').and.callFake(
      (key, value) => (localStore[key] = value)
    );
    spyOn(window.localStorage, 'clear').and.callFake(() => (localStore = {}));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return wallets from local storage on getLocalStorageWallets()', ()=>{
    localStore = {wallets: MOCK_WALLETS};
    expect(service.getLocalStorageWallets().length).toEqual(2);
    expect(service.getLocalStorageWallets()[0].address).toEqual(MOCK_WALLETS[0].address);
  });

  it('should save wallets to local storage on setLocalStorageWallet()', ()=>{
    service.setLocalStorageWallet(MOCK_WALLET_BOB);
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    const wallets: Wallet[] = JSON.parse(localStore.wallets);
    const bobsWallet = wallets[0];
    expect(bobsWallet.address).toBe(MOCK_WALLET_BOB.address);
  });

  it('should return wallets getWallets()', async ()=>{});

  it('should add wallet to store on addWallet()', ()=>{});

  it('should remove wallet from store on removeWallet()', ()=>{});

  it('should load all wallets on loadWallets()', ()=>{});

  it('should run loadwallets() on construction', ()=>{});

  it('should get a wallet stake address on getWalletStakeAddress()', ()=>{});
});
function cold(arg0: string, arg1: { a: boolean; }) {
  throw new Error('Function not implemented.');
}

function hot(arg0: string, arg1: { a: Wallet; }) {
  throw new Error('Function not implemented.');
}

