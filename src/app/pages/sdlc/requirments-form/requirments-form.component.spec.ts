import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirmentsFormComponent } from './requirments-form.component';

describe('RequirmentsFormComponent', () => {
  let component: RequirmentsFormComponent;
  let fixture: ComponentFixture<RequirmentsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequirmentsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirmentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
