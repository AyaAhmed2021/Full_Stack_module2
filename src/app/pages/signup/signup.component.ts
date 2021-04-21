import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email : string ='';
  password :string = '';
  name : string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  signup(){
    this.authService.signup(this.email, this.password, this.name)
  }
}
