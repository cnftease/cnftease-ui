import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { WalletsDetailsViewComponent } from './wallets-details-view.component';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { WalletModule } from '../../wallet.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { initialState } from '../../store/reducers/wallet.reducer';
import { WalletService } from '../../service/wallet.service';
import { MockWalletService, MOCK_WALLETS } from '../../spec/mocks';
import { defaultWalletProviders } from '../../spec/defaults';

fdescribe('WalletsDetailsViewComponent', () => {
  let component: WalletsDetailsViewComponent;
  let fixture: ComponentFixture<WalletsDetailsViewComponent>;
  let walletService: WalletService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        WalletsDetailsViewComponent,
      ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ...defaultWalletProviders,
      ]
    });

    fixture = TestBed.createComponent(WalletsDetailsViewComponent);
    component = fixture.componentInstance;
    walletService = TestBed.inject(WalletService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have expected number of wallets', async () => {
    component.wallets$.subscribe(wallets => {
      expect(wallets.length).toEqual(MOCK_WALLETS.length);
      return
    })
  })
});

