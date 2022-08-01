import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInitViewComponent } from './project-init-view.component';

describe('ProjectInitViewComponent', () => {
  let component: ProjectInitViewComponent;
  let fixture: ComponentFixture<ProjectInitViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectInitViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInitViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
