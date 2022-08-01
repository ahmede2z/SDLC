import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInitFormComponent } from './project-init-form.component';

describe('ProjectInitFormComponent', () => {
  let component: ProjectInitFormComponent;
  let fixture: ComponentFixture<ProjectInitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectInitFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
