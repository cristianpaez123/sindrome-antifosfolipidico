import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinManifestations } from './skin-manifestations';

describe('SkinManifestations', () => {
  let component: SkinManifestations;
  let fixture: ComponentFixture<SkinManifestations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkinManifestations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkinManifestations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
