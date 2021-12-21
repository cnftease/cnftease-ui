import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { PageSettingsComponent } from './components/page-settings/page-settings.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SecurityComponent } from './components/security/security.component';
import { WalletsComponent } from './components/wallets/wallets.component';
import { MatNativeDateModule } from '@angular/material/core';
import { HeaderModule } from '../../header/header.module';
import { FooterModule } from '../../footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserResolver } from 'src/app/auth/User.resolver';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { WalletModule } from '../../wallet/wallet.module';
const routes: Routes = [
  {
    path: '', component: PageSettingsComponent, resolve: { currentUser: UserResolver},
    children: [
      { path: 'account', component: AccountInfoComponent, resolve: { currentUser: UserResolver}},
      { path: 'calendar', component: CalendarComponent },
      { path: 'security', component: SecurityComponent },
      { path: 'wallets', component: WalletsComponent },
    ]
  }
]
@NgModule({
  declarations: [
    PageSettingsComponent,
    AccountInfoComponent,
    CalendarComponent,
    SecurityComponent,
    WalletsComponent,
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
    MatSnackBarModule,
    HeaderModule,
    FooterModule,
    WalletModule,
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    MatDatepickerModule,
  ]
})
export class PageSettingsModule { }
