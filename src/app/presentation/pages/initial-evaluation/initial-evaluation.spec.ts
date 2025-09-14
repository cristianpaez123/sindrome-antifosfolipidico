import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialEvaluation } from './initial-evaluation';

describe('InitialEvaluation', () => {
  let component: InitialEvaluation;
  let fixture: ComponentFixture<InitialEvaluation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialEvaluation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialEvaluation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
