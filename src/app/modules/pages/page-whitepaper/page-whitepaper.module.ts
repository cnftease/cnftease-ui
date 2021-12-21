import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';

import { MatNativeDateModule } from '@angular/material/core';
import { HeaderModule } from '../../header/header.module';
import { FooterModule } from '../../footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageWhitepaperComponent } from './componenets/page-whitepaper/page-whitepaper.component';
const routes: Routes = [
  {
    path: '', component: PageWhitepaperComponent,
  }
]
@NgModule({
  declarations: [
    PageWhitepaperComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [
    PageWhitepaperComponent,
    RouterModule,
  ],
  providers: [
    MatDatepickerModule,
  ]
})
export class PageWhitepaperModule { }
