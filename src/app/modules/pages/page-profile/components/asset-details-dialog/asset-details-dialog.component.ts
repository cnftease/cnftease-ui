import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Asset } from 'src/app/modules/wallet/models/Asset';
import { LogService } from 'src/app/core/services/log.service';

@Component({
  selector: 'app-asset-details-dialog',
  templateUrl: './asset-details-dialog.component.html',
  styleUrls: ['./asset-details-dialog.component.scss']
})
export class AssetDetailsDialogComponent implements OnInit {

  constructor(
    private log: LogService,
    public dialogRef: MatDialogRef<AssetDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Asset,
  ) { }

  ngOnInit(): void {
  }

  onCancel(){
    this.dialogRef.close();
  }
}
