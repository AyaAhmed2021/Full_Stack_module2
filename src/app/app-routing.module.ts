import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TodoTempleteComponent } from './pages/todo-templete/todo-templete.component';


const routes : Routes =[
  {
    path :'',
    component : HomeComponent 
  },
  {
    path :'login',
    component : LoginComponent 
  },
  {
    path :'signup',
    component : SignupComponent 
  },
  {
    path :'addTodo',
    component : TodoTempleteComponent 
  },
  {
    path :'**',
    component : NotFoundComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

