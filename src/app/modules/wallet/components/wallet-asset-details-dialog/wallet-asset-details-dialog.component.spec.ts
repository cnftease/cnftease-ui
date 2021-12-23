import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletAssetDetailsDialog } from './wallet-asset-details-dialog.component';

describe('WalletAssetDetailsDialogComponent', () => {
  let component: WalletAssetDetailsDialog;
  let fixture: ComponentFixture<WalletAssetDetailsDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletAssetDetailsDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletAssetDetailsDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
