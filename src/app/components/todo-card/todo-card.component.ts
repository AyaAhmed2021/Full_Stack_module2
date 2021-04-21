import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';
import { TODO_INTERFACE } from 'src/app/types/todo.interface';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {
  @Input() todo : TODO_INTERFACE | any
  
  constructor(private todosService:TodosService, private router: Router ) { }

  ngOnInit(): void {
  }

  deleteTodo() {
    const id = this.todo._id;
    this.todosService.deleteTodo(id);
  }

  Completed(){
    this.todosService.Completed
  }
}
