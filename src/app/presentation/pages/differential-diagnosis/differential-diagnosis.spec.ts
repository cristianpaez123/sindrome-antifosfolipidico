import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentialDiagnosis } from './differential-diagnosis';

describe('DifferentialDiagnosis', () => {
  let component: DifferentialDiagnosis;
  let fixture: ComponentFixture<DifferentialDiagnosis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DifferentialDiagnosis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifferentialDiagnosis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
