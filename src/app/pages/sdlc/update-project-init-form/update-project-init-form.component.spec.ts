import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjectInitFormComponent } from './update-project-init-form.component';

describe('UpdateProjectInitFormComponent', () => {
  let component: UpdateProjectInitFormComponent;
  let fixture: ComponentFixture<UpdateProjectInitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProjectInitFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProjectInitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
