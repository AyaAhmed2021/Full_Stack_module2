import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTempleteComponent } from './todo-templete.component';

describe('TodoTempleteComponent', () => {
  let component: TodoTempleteComponent;
  let fixture: ComponentFixture<TodoTempleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTempleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTempleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
