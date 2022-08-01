import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqPhaseImgViewComponent } from './req-phase-img-view.component';

describe('ReqPhaseImgViewComponent', () => {
  let component: ReqPhaseImgViewComponent;
  let fixture: ComponentFixture<ReqPhaseImgViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqPhaseImgViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqPhaseImgViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
