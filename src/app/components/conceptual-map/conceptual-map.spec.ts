import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptualMap } from './conceptual-map';

describe('ConceptualMap', () => {
  let component: ConceptualMap;
  let fixture: ComponentFixture<ConceptualMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConceptualMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptualMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
