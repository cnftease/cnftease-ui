import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AssetAmount } from '../models/AssetAmount';
import { BlockfrostService } from '../../../core/services/blockfrost.service';
import { LogService } from '../../../core/services/log.service';
import { Asset } from '../models/Asset';
import { Wallet } from '../models/Wallet';
import { of } from 'rxjs';
import { WalletStateService } from './wallet-state.service';
import { addedWallet, loadedWallets, removedWallet } from '../store/actions/wallet.actions';
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
    this.loadWallets()
  }

  getLocalStorageWallets(): Wallet[] {
    const wallets: Wallet[] = JSON.parse(localStorage.getItem("wallets") || "[]");
    return wallets;
  }

  getWallets(){
    return this.state.store.pipe(select(selectWallets))
  }

  addWallet(wallet: Wallet) {
    const wallets: Wallet[] = this.getLocalStorageWallets();
    wallets.push(wallet)
    localStorage.setItem("wallets", JSON.stringify(wallets));
    this.state.store.dispatch(addedWallet(wallet));
  }

  removeWallet(address: string){
    this.state.store.dispatch(removedWallet(address));
    const wallets: Wallet[] = this.getLocalStorageWallets();
    localStorage.setItem("wallets", JSON.stringify(wallets.filter(wallet => wallet.address !== address)));
    this.state.store.dispatch(removedWallet(address));
  }

  loadWallets(){
    this.state.store.dispatch(loadedWallets(this.getLocalStorageWallets()))
  }

  getWalletStakeAddress(address: string) {
    return this.blockfrost.getAddressDetails(address).pipe(map(details => details.stake_address));
  }

  /**
   * Loads wallet details based on a given address.
   */
  async getWalletAssets(stakeAddress: string): Promise<Asset[]> {
    const amounts: AssetAmount[] = await this.blockfrost.getAddressAssetAmounts(stakeAddress).toPromise();
    const assets: Asset[] = [];

    if (amounts?.length > 0) {
      amounts.forEach((amount) => {
        try {
          const asset: Asset = this.blockfrost.getAssetInfo(amount.unit);
          if (!asset) {
            throw `Problem loading asset '${amount.unit}'.`;
          }
        }
        catch (e) {
          let msg: string;
          if (typeof e === "string") {
            msg = e;
          } else if (e instanceof Error) {
            msg = e.message;
          } else {
            msg = `Problem loading asset '${amount.unit}'`;
          }
          console.error(msg);
        }
        assets.push();
      });
    }
    return assets;
  }


}
