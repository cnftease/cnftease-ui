import { createAction, props } from '@ngrx/store';
import { Wallet } from '../../models/Wallet';

export const addedWallet = createAction(
  '[Wallet] Added Wallet',
  (wallet: Wallet)=>({wallet})
)

export const removedWallet = createAction(
  '[Wallet] Removed Wallet',
  (walletAddress: string)=>({walletAddress})
);

export const loadedWallets = createAction(
  '[Wallet] Loaded Wallets',
  (wallets: Wallet[])=>({wallets})
);

export const loadedAssets = createAction(
  '[Wallet] Loaded Assets',
  (wallets: Wallet[])=>({wallets})
);