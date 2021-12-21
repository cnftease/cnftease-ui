import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Asset } from 'src/app/modules/wallet/models/Asset';
import { CnftPost } from 'src/app/core/models/CnftPost';
import { BlockfrostService } from 'src/app/core/services/blockfrost.service';
import { LogService } from 'src/app/core/services/log.service';
import { AssetDetailsDialogComponent } from '../../../pages/page-profile/components/asset-details-dialog/asset-details-dialog.component';

@Component({
  selector: 'wallet-asset-thumbnail',
  template: `
    <img *ngIf="imgUrl" (click)="openDetails()" loading="auto" class="nft" src="{{imgUrl}}" alt="{{asset.assetName}}" (load)="onLoaded()" layout-fill>
      <p *ngIf="!imgUrl && !loading" class="not-loaded">?</p>
    <mat-spinner *ngIf="loading"></mat-spinner>
  `,
  styleUrls: ['./wallet-asset-thumbnail.component.scss']
})
export class WalletAssetThumbnailComponent implements OnInit {
  @Input() asset: Asset;
  @Output() hide = new EventEmitter<string>();
  imgUrl: string;
  loading: boolean
  constructor(
    public dialog: MatDialog,
  ) {
    this.loading = true;

  }
  async ngOnInit(): Promise<void> {
    let imgUrl: string = this.asset.onchain_metadata.image
    if (imgUrl !== undefined) {
      if (!imgUrl.includes("/ipfs/")) {
        imgUrl = imgUrl.replace('ipfs://', 'https://cloudflare-ipfs.com/ipfs/')
      }
      else {
        imgUrl = imgUrl.replace('ipfs://', 'https://cloudflare-ipfs.com/')
      }
    } else {
      this.loading = false;
    }
    this.imgUrl = imgUrl;
  }

  openDetails(): void {
    const dialogRef = this.dialog.open(AssetDetailsDialogComponent, {
      data: this.asset,
    });
    dialogRef.afterClosed().subscribe(result => { });
  }

  onLoaded() {
    this.loading = false
  }
}