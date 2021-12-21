import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogService } from 'src/app/core/services/log.service';
import { Wallet } from '../../../models/Wallet';

@Component({
  selector: 'app-add-wallet-dialog',
  templateUrl: './add-wallet-dialog.component.html',
  styleUrls: ['./add-wallet-dialog.component.scss']
})
export class AddWalletDialog {
  form: FormGroup
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddWalletDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Wallet,
  ) {
    this.form = fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
    })
  }

  onCancel() {
    this.dialogRef.close();
  }
}
