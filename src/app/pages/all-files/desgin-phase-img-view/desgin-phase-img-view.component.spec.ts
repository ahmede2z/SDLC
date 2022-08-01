import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesginPhaseImgViewComponent } from './desgin-phase-img-view.component';

describe('DesginPhaseImgViewComponent', () => {
  let component: DesginPhaseImgViewComponent;
  let fixture: ComponentFixture<DesginPhaseImgViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesginPhaseImgViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesginPhaseImgViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
