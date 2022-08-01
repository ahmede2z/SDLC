import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhasesNavComponent } from './phases-nav.component';

describe('PhasesNavComponent', () => {
  let component: PhasesNavComponent;
  let fixture: ComponentFixture<PhasesNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhasesNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhasesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
