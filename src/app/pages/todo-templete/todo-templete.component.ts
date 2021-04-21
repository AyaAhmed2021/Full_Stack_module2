import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-templete',
  templateUrl: './todo-templete.component.html',
  styleUrls: ['./todo-templete.component.css']
})
export class TodoTempleteComponent implements OnInit {
  title : string = ''
  isCompleted :boolean = false ; 
  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
  }
  send(){
    this.todoService.createTodo(this.title, this.isCompleted)
  }
}
