import { parallel } from '@angular/cdk/testing';
import { HarnessLoader } from '@angular/cdk/testing/component-harness';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';
import {MatListHarness, MatSelectionListHarness} from '@angular/material/list/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { WalletService } from '../../service/wallet.service';
import { defaultWalletProviders } from '../../spec/defaults';
import { MockWalletService } from '../../spec/mocks';
import { initialState } from '../../store/reducers/wallet.reducer';

import { WalletSelectionListComponent } from './wallet-selection-list.component';



fdescribe('WalletSelectionListComponent', () => {
  let fixture: ComponentFixture<WalletSelectionListComponent>;
  let loader: HarnessLoader;
  let walletService: WalletService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletSelectionListComponent ],
      imports: [
        HttpClientTestingModule,
        MatListModule,
      ],
      providers: [
        ...defaultWalletProviders,
      ],
    })
    .compileComponents();
    fixture = TestBed.createComponent(WalletSelectionListComponent);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
    walletService = TestBed.inject(WalletService);
  });

  it('should return the correct list text', async () => {
    let selectList = await loader.getHarness(MatSelectionListHarness);
    let items = await selectList.getItems();
    expect(await parallel(() => items.map(i => i.getText()))).toEqual([
      `bob (...23456789)`,
      `ross (...87654321)`,
    ]);
  });

  it('should select all items on creation', async () => {
    let selectList = await loader.getHarness(MatSelectionListHarness);
    let items = await selectList.getItems();
    expect(await parallel(() => items.map(i => i.isSelected()))).toEqual([
      true,
      true,
    ]);
  });
});
