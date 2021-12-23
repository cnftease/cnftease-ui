import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletAssetThumbnailGridListComponent } from './wallet-asset-thumbnail-grid-list.component';

describe('CnftGridListComponent', () => {
  let component: WalletAssetThumbnailGridListComponent;
  let fixture: ComponentFixture<WalletAssetThumbnailGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletAssetThumbnailGridListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletAssetThumbnailGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
