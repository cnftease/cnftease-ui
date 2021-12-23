import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Wallet } from '../../models/Wallet';
import { WalletService } from '../../service/wallet.service';
@Component({
  selector: 'wallets-details-view',
  template: `
    <div class="wallets-container" *ngFor="let wallet of wallets$ | async;let i=index">
      <p class="wallet-name">{{wallet.name}}</p>
      <p class="wallet-address">{{wallet.address}}</p>
      <wallet-remove-button [wallet]="wallet"></wallet-remove-button>
    </div>
  `,
  styles: []
})
export class WalletsDetailsViewComponent implements OnInit {

  wallets$: Observable<Wallet[]>;
  
  constructor(public walletService: WalletService) {
    this.wallets$ = this.walletService.getWallets();
  }
  ngOnInit(): void {}
}
