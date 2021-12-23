import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { BlockfrostService } from 'src/app/core/services/blockfrost.service';

import { WalletService } from '../../../service/wallet.service';

@Injectable()
export class AddressValidatorAsync {

    constructor(private service: WalletService) { }

    validateAddress(): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            return this.service.getWalletStakeAddress(control.value).pipe(
                map(res => {
                    return !res ? { 'addressInvalid': true } : null;
                }),
                catchError(error => {
                    return of({ 'addressInvalid': true })
                })
            )
        }
    }
}