import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Asset } from 'src/app/modules/wallet/models/Asset';
import { LogService } from 'src/app/core/services/log.service';

@Component({
  selector: 'wallet-asset-details-dialog',
  templateUrl: './wallet-asset-details-dialog.component.html',
  styles: []
})
export class WalletAssetDetailsDialog implements OnInit {

  constructor(
    private log: LogService,
    public dialogRef: MatDialogRef<WalletAssetDetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Asset,
  ) { }

  ngOnInit(): void {
  }

  onCancel(){
    this.dialogRef.close();
  }
}
