import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WalletAddDialog } from './wallet-add-dialog.component';

describe('WalletAddDialog', () => {
  let component: WalletAddDialog;
  let fixture: ComponentFixture<WalletAddDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletAddDialog ],
      providers: [
        
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletAddDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
