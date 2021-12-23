import { Component, Input, OnInit } from '@angular/core';
import { firstValueFrom, map, Observable, Subject } from 'rxjs';
import { Asset } from 'src/app/modules/wallet/models/Asset';
import { Wallet } from '../../models/Wallet';
import { WalletService } from '../../service/wallet.service';


@Component({
  selector: 'wallet-asset-thumbnail-grid-list',
  templateUrl: './wallet-asset-thumbnail-grid-list.component.html',
  styleUrls: ['./wallet-asset-thumbnail-grid-list.component.scss']
})
export class WalletAssetThumbnailGridListComponent implements OnInit {
  @Input()columns: number = 3;
  wallets: Observable<Wallet[]>;
  assets: Asset[];
  constructor(
    private walletService: WalletService,
  ) {}

  async ngOnInit(): Promise<void> {
    this.wallets = this.walletService.getWallets();
    const wallets = await firstValueFrom(this.wallets.pipe(map((wArr) => wArr)));
    wallets.map(w => {
      w.assets?.forEach(a => {
        this.assets.push(a);
      })
    });
  }
}
