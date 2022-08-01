import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiremetViewComponent } from './requiremet-view.component';

describe('RequiremetViewComponent', () => {
  let component: RequiremetViewComponent;
  let fixture: ComponentFixture<RequiremetViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequiremetViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiremetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
