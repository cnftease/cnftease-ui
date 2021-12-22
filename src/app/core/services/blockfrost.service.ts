import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Asset } from 'src/app/modules/wallet/models/Asset';
import { environment } from 'src/environments/environment';
import { AssetAmount } from '../models/AssetAmount';
import { LogService } from './log.service';



export enum SortOrder {
  ascending = 'asc',
  descending = 'desc'
}
@Injectable({
  providedIn: 'root'
})
export class BlockfrostService {
  private allAssets: Asset[] = [];

  private readonly headers = {
    project_id: environment.blockFrostApiKey
  }
  constructor(private http: HttpClient, private log: LogService) {
    this.log.enabled = false;
    this.log.banner('Logging BlockFrostService');
  }

  get assets() {
    return this.allAssets;
  }

  // async getSavedAddressDetails(address: SavedAddress) {
  //   const details = await this.getAddressDetails(address.address).toPromise();
  //   const assetAmounts = await this.getAddressAssets(details.stake_address).toPromise();
  //   const assets: Asset[] = [];

  //   assetAmounts.forEach(async (amount: AssetAmount) => {
  //     const info: Asset = await this.getAssetInfo(amount.unit);
  //     if (info.onchain_metadata?.image) {
  //       assets.push(info);
  //     }
  //   });

  // return {
  //   ...address,
  //   details,
  //   assets,
  // };
  // };

  getAllAssets(resultCount: number = 100, page: number = 1, order: SortOrder = SortOrder.ascending) {
    return this.http.get<{ asset: string, quantity: number }[]>(`${environment.blockFrostEndpoint}/assets?page=${page}&count=${resultCount}&order=${order}`, {
      headers: this.headers
    });
  }

  getAsset(id: string, resultCount: number = 100, page: number = 1, order: SortOrder = SortOrder.ascending) {
    return this.http.get<any>(`${environment.blockFrostEndpoint}/assets/${id}?page=${page}&count=${resultCount}&order=${order}`, {
      headers: this.headers
    });
  }

  async getAssetInfo(assetId: string) {
    let assetInfo;

    this.log.info("Checking for item in cache")

    const cache = localStorage.getItem(assetId);

    if (!cache) {
      const assetInfo = await firstValueFrom(this.getAsset(assetId));
      localStorage.setItem(assetId, JSON.stringify(assetInfo));
    }
    else {
      assetInfo = JSON.parse(cache);
    }

    this.assets.push(assetInfo);
    return assetInfo;
  }

  getAddressDetails(address: string) {
    return this.http.get<any>(`${environment.blockFrostEndpoint}/addresses/${address}`, {
      headers: this.headers
    });
  }

  getAddressAssetAmounts(stakeAddress: string) {
    return this.http.get<AssetAmount[]>(`${environment.blockFrostEndpoint}/accounts/${stakeAddress}/addresses/assets`, {
      headers: this.headers
    })
  }

}
