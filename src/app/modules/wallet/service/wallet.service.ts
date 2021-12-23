import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { flatMap, map } from 'rxjs/operators';
import { AssetAmount } from '../models/AssetAmount';
import { BlockfrostService } from '../../../core/services/blockfrost.service';
import { LogService } from '../../../core/services/log.service';
import { Asset } from '../models/Asset';
import { Wallet } from '../models/Wallet';
import { firstValueFrom, of } from 'rxjs';
import { WalletStateService } from './wallet-state.service';
import { addedWallet, loadedAssets, loadedWallets, removedWallet } from '../store/actions/wallet.actions';
import { select } from '@ngrx/store';
import { selectWallets } from '../store/selectors/wallet.selectors';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(
    private blockfrost: BlockfrostService,
    private state: WalletStateService,
  ) {
    this.loadWallets();
  }

  getLocalStorageWallets(): Wallet[] {
    const wallets: Wallet[] = JSON.parse(localStorage.getItem("wallets") || "[]");
    return wallets;
  }
  setLocalStorageWallet(wallet: Wallet): void {
    const wallets: Wallet[] = this.getLocalStorageWallets();
    wallets.push(wallet);
    localStorage.setItem("wallets", JSON.stringify(wallets));
  }

  getWallets() {
    return this.state.store.pipe(select(selectWallets))
  }

  async addWallet(wallet: Wallet) {
    const stakeAddress = await firstValueFrom(this.getWalletStakeAddress(wallet.address));
    if(stakeAddress){
      wallet.stakeAddress = stakeAddress
    }
    this.setLocalStorageWallet(wallet);
    this.state.store.dispatch(addedWallet(wallet));
  }

  removeWallet(address: string) {
    this.state.store.dispatch(removedWallet(address));
    const wallets: Wallet[] = this.getLocalStorageWallets();
    localStorage.setItem("wallets", JSON.stringify(wallets.filter(wallet => wallet.address !== address)));
    this.state.store.dispatch(removedWallet(address));
  }

  loadWallets() {
    const wallets: Wallet[] = this.getLocalStorageWallets()
    this.state.store.dispatch(loadedWallets(wallets));
  }

  async loadWalletsAssets(){
    const wallets: Wallet[] = this.getLocalStorageWallets()
    const newWallets: Wallet[] = [];
    wallets.forEach(async w => {
      newWallets.push({
        ...w,
        assets: await this.loadWalletAssets(w)
      })
    })
    return newWallets
  }

  async loadWalletAssets(wallet: Wallet) {
    return firstValueFrom(this.getWalletAssetAmounts(wallet)).then(amounts => {
      const assets: Asset[] = []
      amounts.map(a => a.unit).forEach(async a => {
        assets.push(await this.getAssetInfo(a));
      })
      return assets
    })
  }

  getWalletAssetAmounts(wallet: Wallet){
    return this.blockfrost.getAddressAssetAmounts(wallet.stakeAddress).pipe(map(amounts => amounts.filter(a => a.quantity == 1)));
  }
  getWalletStakeAddress(address: string) {
    return this.blockfrost.getAddressDetails(address).pipe(map(details => details.stake_address));
  }

  async getAssetInfo(assetId: string) {
    let assetInfo: Asset;

    const cache = localStorage.getItem(assetId);

    if (!cache) {
      assetInfo = await firstValueFrom(this.blockfrost.getAsset(assetId));
      localStorage.setItem(assetId, JSON.stringify(assetInfo));
    }
    else {
      assetInfo = JSON.parse(cache);
    }
    return assetInfo
  }
  /**
   * Loads wallet details based on a given address.
   */
  async getWalletAssets(wallet: Wallet) {  
    const assets: Asset[] = [];
    const amounts = await firstValueFrom(this.getWalletAssetAmounts(wallet))
    amounts.forEach(async a => assets.push(await this.getAssetInfo(a.unit)));
    return assets
  }

  async ngOnInit(){
    console.log(JSON.stringify(await this.loadWalletsAssets()))
  }
}
