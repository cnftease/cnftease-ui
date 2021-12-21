import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { actions } from '..';
import { WalletService } from '../../service/wallet.service';
 
@Injectable()
export class WalletEffects {
 
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(actions.addedWallet),
    exhaustMap((action) => this.walletService.getWalletStakeAddress(action.wallet.address)
      .pipe(
        map(wallet => ({ type: '[Wallet API] Wallet Saved Success', payload: wallet })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private walletService: WalletService
  ) {}
}