import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFundingComponent } from './page-funding.component';

describe('PageFundingComponent', () => {
  let component: PageFundingComponent;
  let fixture: ComponentFixture<PageFundingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFundingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
