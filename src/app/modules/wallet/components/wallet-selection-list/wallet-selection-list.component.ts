import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Wallet } from '../../models/Wallet';
import { Observable } from 'rxjs/internal/Observable';
import { WalletService } from '../../service/wallet.service';

@Component({
  selector: 'wallet-selection-list',
  template: `
    <mat-selection-list #addressList [multiple]="true">
      <mat-list-option selected="{{true}}" *ngFor="let wallet of wallets | async; let i=index" [value]="wallet">{{wallet.name ? wallet.name : "Wallet " + i}} (...{{wallet.address.substring((wallet.address.length -8),(wallet.address.length))}})
      </mat-list-option>
    </mat-selection-list>
  `,
  styles: []
})
export class WalletSelectionListComponent implements OnInit {
  @Output() assetFilterEvent = new EventEmitter<any[]>()
  wallets: Observable<Wallet[]>;
  constructor(
    private walletService: WalletService,
  ) {}

  ngOnInit(): void {
    this.wallets = this.walletService.getWallets();
  }
}
