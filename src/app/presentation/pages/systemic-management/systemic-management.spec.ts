import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemicManagement } from './systemic-management';

describe('SystemicManagement', () => {
  let component: SystemicManagement;
  let fixture: ComponentFixture<SystemicManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemicManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemicManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
