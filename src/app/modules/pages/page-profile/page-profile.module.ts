import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageProfileComponent } from './components/page-profile/page-profile.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list'
import { LayoutModule } from '@angular/cdk/layout';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { WalletModule } from '../../wallet/wallet.module';
const routes: Routes = [
  {
    path: '', component: PageProfileComponent,
  }
]
@NgModule({
  declarations: [
    PageProfileComponent,

  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatDialogModule,
    LayoutModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatListModule,
    MatProgressSpinnerModule,
    WalletModule,
    RouterModule.forChild(routes),
  ]
})
export class PageProfileModule { }
