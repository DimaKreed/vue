import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTodoListComponent } from './full-todo-list.component';

describe('FullTodoListComponent', () => {
  let component: FullTodoListComponent;
  let fixture: ComponentFixture<FullTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullTodoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
