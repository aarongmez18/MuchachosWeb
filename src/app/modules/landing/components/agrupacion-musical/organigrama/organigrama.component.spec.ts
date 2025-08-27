import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganigramaComponent } from './organigrama.component';

describe('OrganigramaComponent', () => {
  let component: OrganigramaComponent;
  let fixture: ComponentFixture<OrganigramaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganigramaComponent]
    });
    fixture = TestBed.createComponent(OrganigramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
