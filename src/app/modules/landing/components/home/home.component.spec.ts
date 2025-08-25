import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentLayout } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponentLayout;
  let fixture: ComponentFixture<HomeComponentLayout>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponentLayout]
    });
    fixture = TestBed.createComponent(HomeComponentLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
