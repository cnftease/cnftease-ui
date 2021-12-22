import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletsDetailsViewComponent } from './components/wallets-details-view/wallets-details-view.component';
import { WalletAddComponent } from './components/wallet-add/wallet-add.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddWalletDialog } from './components/wallet-add/add-wallet-dialog/add-wallet-dialog.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { MatIconModule } from '@angular/material/icon';
import { WalletRemoveComponent } from './components/wallet-remove/wallet-remove.component';
import { WalletAssetThumbnailComponent } from './components/wallet-asset-thumbnail/wallet-asset-thumbnail.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { WalletSelectionListComponent } from './components/wallet-selection-list/wallet-selection-list.component';

@NgModule({
  declarations: [
    WalletsDetailsViewComponent,
    WalletAddComponent,
    WalletAssetThumbnailComponent,
    AddWalletDialog,
    WalletRemoveComponent,
    WalletSelectionListComponent,
  ],
  imports: [
    CommonModule,    
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatListModule,
    StoreModule.forFeature(reducers.walletFeatureKey, reducers.reducer),
  ],
  exports: [
    WalletsDetailsViewComponent,
    WalletSelectionListComponent,
    WalletAddComponent,
    WalletRemoveComponent,
    WalletRemoveComponent,
  ]
})
export class WalletModule { }
