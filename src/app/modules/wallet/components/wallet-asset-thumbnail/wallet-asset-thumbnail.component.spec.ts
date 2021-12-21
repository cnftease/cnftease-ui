import { HarnessLoader } from '@angular/cdk/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { defaultWalletProviders } from '../../spec/defaults';

import { WalletAssetThumbnailComponent } from './wallet-asset-thumbnail.component';

describe('AssetThumbnailComponent', () => {
  let fixture: ComponentFixture<WalletAssetThumbnailComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletAssetThumbnailComponent ],
      providers: [
        ...defaultWalletProviders,]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletAssetThumbnailComponent);
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentRef).toBeTruthy();
  });
});
