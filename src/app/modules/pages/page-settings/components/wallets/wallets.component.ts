
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LogService } from 'src/app/core/services/log.service';
import { BlockfrostService } from 'src/app/core/services/blockfrost.service';

@Component({
  selector: 'app-wallets',
  template: `
    <wallets-details-view></wallets-details-view>
    <wallet-add></wallet-add>
  `,
  styles: []
})
export class WalletsComponent implements OnInit {
  constructor() {};

  ngOnInit(): void {
  }
}
