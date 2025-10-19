import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanaSantaComponent } from './semana-santa.component';

describe('SemanaSantaComponent', () => {
  let component: SemanaSantaComponent;
  let fixture: ComponentFixture<SemanaSantaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SemanaSantaComponent]
    });
    fixture = TestBed.createComponent(SemanaSantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
