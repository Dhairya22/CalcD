import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkupCalculatorComponent } from './markup-calculator.component';

describe('MarkupCalculatorComponent', () => {
  let component: MarkupCalculatorComponent;
  let fixture: ComponentFixture<MarkupCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkupCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkupCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
