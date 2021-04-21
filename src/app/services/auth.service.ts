import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LOGINRES_INTERFACE } from '../types/login-res.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl : string = 'http://localhost:3000/auth';
  constructor(private http: HttpClient, private userService : UserService, private router: Router) { }

  login (email : string, password : string){
    this.http.post<LOGINRES_INTERFACE>(`${this.baseUrl}/login `, {
      email,
      password
    }).subscribe(
      data => {
        this.userService.setUser(data)
        this.router.navigateByUrl('/')
      },
      err => console.log(err)
    )
  }   //end of login 

  signup (email : string, password : string, name : string){
    this.http.post(`${this.baseUrl}/signup`,{
      email, 
      password,
      name
    }).subscribe(
      (data) => {
        this.router.navigateByUrl('/login')
      },
      (err) => console.log(err)
    )
  }   // end of signup

  signout(){
    this.userService.clear()
    this.router.navigateByUrl('/login')
  }
}
