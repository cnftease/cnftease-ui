import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WalletState } from '../../models/WalletState';
import { walletFeatureKey } from '../reducers/wallet.reducer';

export const selectWalletState = createFeatureSelector<WalletState>(
  walletFeatureKey,
);

export const selectWallets = createSelector(
  selectWalletState,
  (state: WalletState) => state.wallets
);

