import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponentLayout } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponentLayout;
  let fixture: ComponentFixture<FooterComponentLayout>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponentLayout]
    });
    fixture = TestBed.createComponent(FooterComponentLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
