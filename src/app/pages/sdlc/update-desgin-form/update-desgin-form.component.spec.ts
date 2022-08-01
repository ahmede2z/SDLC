import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDesginFormComponent } from './update-desgin-form.component';

describe('UpdateDesginFormComponent', () => {
  let component: UpdateDesginFormComponent;
  let fixture: ComponentFixture<UpdateDesginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDesginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDesginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
