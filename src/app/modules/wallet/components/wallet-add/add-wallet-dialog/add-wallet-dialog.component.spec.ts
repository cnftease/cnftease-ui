import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddWalletDialog } from './add-wallet-dialog.component';

describe('AddWalletDialog', () => {
  let component: AddWalletDialog;
  let fixture: ComponentFixture<AddWalletDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWalletDialog ],
      providers: [
        
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWalletDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
