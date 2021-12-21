import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Wallet } from '../../models/Wallet';
import { WalletState } from '../../models/WalletState';
import { WalletService } from '../../service/wallet.service';
import { actions } from '../../store';
import { selectWallets } from '../../store/selectors/wallet.selectors';

@Component({
  selector: 'wallets-details-view',
  template: `
    <div class="wallets-container" *ngFor="let wallet of wallets$ | async;let i=index">
      <p class="wallet-name">{{wallet.name}}</p>
      <p class="wallet-address">{{wallet.address}}</p>
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
