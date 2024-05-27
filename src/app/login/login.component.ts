import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService){

  }

  fazerLogin() {
    //throw new Error('Method not implemented.');
    //console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);
  }

}
