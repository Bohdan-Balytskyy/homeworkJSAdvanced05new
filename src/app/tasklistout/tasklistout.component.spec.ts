import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistoutComponent } from './tasklistout.component';

describe('TasklistoutComponent', () => {
  let component: TasklistoutComponent;
  let fixture: ComponentFixture<TasklistoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasklistoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklistoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
