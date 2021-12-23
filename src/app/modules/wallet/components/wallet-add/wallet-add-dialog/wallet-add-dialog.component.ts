import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Wallet } from '../../../models/Wallet';
import { WalletService } from '../../../service/wallet.service';
import { AddressValidatorAsync} from './wallet-address.validator';


@Component({
  selector: 'app-add-wallet-dialog',
  templateUrl: './wallet-add-dialog.component.html',
  providers: [AddressValidatorAsync]
})
export class WalletAddDialog {
  form: FormGroup
  constructor(
    fb: FormBuilder,
    private addressValidator: AddressValidatorAsync,
    public dialogRef: MatDialogRef<WalletAddDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Wallet,
  ) {
    this.form = fb.group({
      name: ['', Validators.required],
      address: ['',[Validators.required],[addressValidator.validateAddress()]],
    })
  }
  get addressControl() {
    return this.form.get('address')
  }
  onCancel() {
    this.dialogRef.close();
  }
}
