import { Action, createReducer, MetaReducer, on } from '@ngrx/store';
import { WalletState } from '../../models/WalletState';
import * as WalletActions from '../actions/wallet.actions';

export const walletFeatureKey = 'wallet';

export const initialState: WalletState = {
  wallets: []
};

export function reducer(state: WalletState | undefined, action: Action): any {
  return walletReducer(state, action);
}

export const metaReducers: MetaReducer[] = [];

export const walletReducer = createReducer(
  initialState,
  on(WalletActions.addedWallet,
    (state: WalletState, { wallet }) =>
    ({
      ...state,
      wallets: [...state.wallets, wallet]
    })
  ),
  on(WalletActions.removedWallet,
    (state: WalletState, { walletAddress }) =>
    ({
      ...state,
      wallets: state.wallets.filter(w => w.address !== walletAddress)
    })
  ),
  on(WalletActions.loadedWallets,
    (state: WalletState, {wallets}) =>
    ({
      ...state,
      wallets: wallets
    })
  ),
  on(WalletActions.loadedAssets,
    (state: WalletState, {wallets}) =>
    ({
      ...state,
      wallets: wallets
    })
  ),
);

