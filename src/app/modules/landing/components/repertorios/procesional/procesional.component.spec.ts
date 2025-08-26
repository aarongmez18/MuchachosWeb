import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesionalComponent } from './procesional.component';

describe('ProcesionalComponent', () => {
  let component: ProcesionalComponent;
  let fixture: ComponentFixture<ProcesionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcesionalComponent]
    });
    fixture = TestBed.createComponent(ProcesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
