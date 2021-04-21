import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TODO_INTERFACE } from '../types/todo.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  baseUrl = 'http://localhost:3000/todos'
  constructor(private http:HttpClient, private userService: UserService, private router: Router) { }

  private _todos : TODO_INTERFACE[] = []     // to get all todos

  get todos(){
    console.log(this._todos)
    return this._todos.slice()
  }

  setheaders(){
    return {
      headers : {
        authorization : this.userService.getToken()
      }
    }
  }

  fetchUserTodos(){
    return this.http.get<{TODOs : TODO_INTERFACE[]}>(this.baseUrl, this.setheaders() ).subscribe(
      (data) => {
        this._todos = data.TODOs
        console.log(data)
    console.log(this._todos)

      },
      (err) => console.log(err)
    )
  }    //end fetching data


  createTodo(title:string, isCompleted:boolean){
    this.http.post<{ todo : TODO_INTERFACE }>(this.baseUrl, { title, isCompleted }, 
  this.setheaders()).subscribe(
    (data) => {
      this._todos.push(data.todo)
      this.router.navigateByUrl('/')
      console.log(data)
    },
    (err) => console.log(err)
  )
  }   // end of create 

  deleteTodo(id : string){
    this.http.delete(`${this.baseUrl}/${id}`, this.setheaders()).subscribe(
      (_ )=>{
        const todoIndex : number = this._todos.findIndex((todo) => todo._id == id)
        if(todoIndex == -1) return ;
        this._todos.splice( todoIndex, 1 )
      },
      (err)=>console.log(err)
    )
  }

  Completed(id: string, isCompleted: boolean){
    this.http.put(`${this.baseUrl}/${id}`,{
      isCompleted
    }).subscribe(
      (_) => isCompleted = true ,
      (err)=> console.log(err)
    )

  }
}
