import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private userService:UserService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  get userExist(){
   return this.userService.userExist
  }

  signout(){
    this.authService.signout()
  }
}
