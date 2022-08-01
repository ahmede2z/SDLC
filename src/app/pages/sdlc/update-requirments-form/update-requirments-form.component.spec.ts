import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRequirmentsFormComponent } from './update-requirments-form.component';

describe('UpdateRequirmentsFormComponent', () => {
  let component: UpdateRequirmentsFormComponent;
  let fixture: ComponentFixture<UpdateRequirmentsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRequirmentsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRequirmentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
