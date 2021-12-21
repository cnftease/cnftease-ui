import { Wallet } from '../../models/Wallet';
import * as fromWallet from './wallet.actions';

describe('loadWallets', () => {
  it('should return an action', () => {
    expect(fromWallet.addedWallet((new Wallet())).type).toBe('[Wallet] Added Wallet');
    expect(fromWallet.removedWallet(('')).type).toBe('[Wallet] Removed Wallet');
    expect(fromWallet.loadedWallets([new Wallet()]).type).toBe('[Wallet] Load Wallets');
  });
});
