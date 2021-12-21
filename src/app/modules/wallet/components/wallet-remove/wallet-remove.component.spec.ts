import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { By } from '@angular/platform-browser';
import { WalletService } from '../../service/wallet.service';
import { defaultWalletProviders } from '../../spec/defaults';
import { MOCK_WALLET_BOB } from '../../spec/mocks';
import { WalletRemoveComponent } from './wallet-remove.component';

fdescribe('WalletRemoveComponent', () => {
  let component: WalletRemoveComponent;
  let fixture: ComponentFixture<WalletRemoveComponent>;
  let loader: HarnessLoader;
  let walletService: WalletService;
  let button: ElementRef;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletRemoveComponent ],
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        ...defaultWalletProviders,
      ],
    })
    .compileComponents();
    fixture = TestBed.createComponent(WalletRemoveComponent);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
    walletService = TestBed.inject(WalletService);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Inputs
  it('should default button text to "Remove"', async () => {
    button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.textContent.trim()).toEqual('Remove');
  });

  it('should have button text matching the "text" input', async () => {
    component.text = "Remove that shit"
    fixture.detectChanges();
    button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.textContent.trim()).toEqual('Remove that shit');
  });

  // Outputs
  it('should emit "removed" when onRemove()', () => {
    spyOn(component.removed, 'emit');
    component.wallet = MOCK_WALLET_BOB
    component.onRemove();
    expect(component.removed.emit).toHaveBeenCalled();
  });

  it('should call "WalletService.removeWallet() when onRemove()', () => {
    spyOn(walletService,'removeWallet');
    component.wallet = MOCK_WALLET_BOB
    component.onRemove();
    expect(walletService.removeWallet).toHaveBeenCalled();
  });
});