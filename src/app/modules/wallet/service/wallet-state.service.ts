import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { WalletState } from '../models/WalletState';
import { actions } from '../store';
import { WalletService } from './wallet.service';

@Injectable({
  providedIn: 'root'
})
export class WalletStateService {
  constructor(private store$: Store<WalletState>) {}
  get store() {
    return this.store$
  }
}
