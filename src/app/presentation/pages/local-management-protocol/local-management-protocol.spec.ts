import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalManagementProtocol } from './local-management-protocol';

describe('LocalManagementProtocol', () => {
  let component: LocalManagementProtocol;
  let fixture: ComponentFixture<LocalManagementProtocol>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalManagementProtocol]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalManagementProtocol);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
