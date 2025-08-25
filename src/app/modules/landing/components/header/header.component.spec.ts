import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponentLayout } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponentLayout;
  let fixture: ComponentFixture<HeaderComponentLayout>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponentLayout]
    });
    fixture = TestBed.createComponent(HeaderComponentLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
