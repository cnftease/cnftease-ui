import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Wallet } from '../../models/Wallet';
import { WalletAddFormData } from '../../models/WalletAddFormData';
import { WalletState } from '../../models/WalletState';
import { WalletStateService } from '../../service/wallet-state.service';
import { WalletService } from '../../service/wallet.service';
import { selectors } from '../../store';
import { addedWallet } from '../../store/actions/wallet.actions';
import { WalletAddDialog } from './wallet-add-dialog/wallet-add-dialog.component';

@Component({
  selector: 'wallet-add-button',
  template: `<button mat-button (click)="onAddWallet()">{{text}}</button>`,
  styles: [],
})
export class WalletAddComponent implements OnInit {
  @Input() text: string = 'Add';
  constructor(
    public dialog: MatDialog,
    private walletSvc: WalletService,
  ) { };

  ngOnInit(): void { }

  onAddWallet(): void {
    const dialogRef = this.dialog.open(WalletAddDialog, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      const form: FormGroup = result;
      const formData: WalletAddFormData = form.value;

      if (form.valid) {
        const wallet = new Wallet();
        wallet.address = formData.address;
        wallet.name = formData.name;
        this.walletSvc.addWallet(wallet)
      }
    });
  }
}
