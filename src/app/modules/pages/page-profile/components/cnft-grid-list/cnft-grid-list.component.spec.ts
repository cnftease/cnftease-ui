import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnftGridListComponent } from './cnft-grid-list.component';

describe('CnftGridListComponent', () => {
  let component: CnftGridListComponent;
  let fixture: ComponentFixture<CnftGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnftGridListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CnftGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
