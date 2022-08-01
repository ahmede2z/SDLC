import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesginViewComponent } from './desgin-view.component';

describe('DesginViewComponent', () => {
  let component: DesginViewComponent;
  let fixture: ComponentFixture<DesginViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesginViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesginViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
