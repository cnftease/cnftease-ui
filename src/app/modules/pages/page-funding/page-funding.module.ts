import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageFundingComponent } from './components/page-funding/page-funding.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
  {
    path: '', component: PageFundingComponent,
  }
];

@NgModule({
  declarations: [
    PageFundingComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    ClipboardModule,
    MatSnackBarModule,
    RouterModule.forChild(routes),
  ]
})
export class PageFundingModule { }
