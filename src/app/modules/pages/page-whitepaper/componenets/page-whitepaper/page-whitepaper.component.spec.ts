import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWhitepaperComponent } from './page-whitepaper.component';

describe('PageWhitepaperComponent', () => {
  let component: PageWhitepaperComponent;
  let fixture: ComponentFixture<PageWhitepaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWhitepaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWhitepaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
