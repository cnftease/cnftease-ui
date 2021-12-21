import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { Wallet } from '../../models/Wallet';
import { WalletService } from '../../service/wallet.service';

/**
 * A button component to remove a wallet via the wallet service.
 * 
 * @param wallet - The wallet object to remove
 * 
 * @param text - Optional override to button text. Defaults to 'Remove'.
 */
@Component({
  selector: 'wallet-remove',
  template: '<button mat-button (click)="onRemove()">{{text}}</button>',
  styles: [],
})
export class WalletRemoveComponent{
  @Input() wallet: Wallet;
  @Input() text?: string = "Remove";
  @Output() removed = new EventEmitter<string>();
  constructor(
    private walletService: WalletService,
  ) {};
  
  onRemove() {
    this.walletService.removeWallet(this.wallet.address);
    this.removed.emit(this.wallet.name);
  }
}
