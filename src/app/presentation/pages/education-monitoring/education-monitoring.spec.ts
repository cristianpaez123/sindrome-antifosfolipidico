import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationMonitoring } from './education-monitoring';

describe('EducationMonitoring', () => {
  let component: EducationMonitoring;
  let fixture: ComponentFixture<EducationMonitoring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationMonitoring]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationMonitoring);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
