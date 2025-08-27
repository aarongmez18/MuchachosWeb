import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscudoUniformidadComponent } from './escudo-uniformidad.component';

describe('EscudoUniformidadComponent', () => {
  let component: EscudoUniformidadComponent;
  let fixture: ComponentFixture<EscudoUniformidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscudoUniformidadComponent]
    });
    fixture = TestBed.createComponent(EscudoUniformidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
