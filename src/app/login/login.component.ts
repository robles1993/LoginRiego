import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginModel } from '../models/LoginModel.class';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginCredentials:LoginModel;
  nombreUsuario: string;
  password: string;

  constructor(
    public userService: UsersService,
    private cookieService: CookieService ) {}

  login() {
    this.loginCredentials = new LoginModel({
      nombreUsuario: this.nombreUsuario, 
      password: this.password
    });
    this.userService.login(this.loginCredentials).subscribe(  
      result =>{
          this.cookieService.set( 'token', result.token);
          window.location.href = 'http://localhost:4200/'
      },
      error=>{
        alert('ERROR DE AUTENTICACIÓN')
      }
    );
  }
}
