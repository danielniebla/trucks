import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from '../login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) { }
  


  user: string = ''; 
  password: string = ''; 
  users: Login[] = [
    {
    user: "EjemploUsuario", 
    password: "AbCd1", 
    type: "1", 
  }];


 login(){
    const user= this.user;
    const password=this.password;
    const spanElement: HTMLElement | null = document.getElementById('error')!;

    if(this.user===this.users[0].user&&this.password===this.users[0].password){
      if(this.users[0].type=="1"){
        this.router.navigate(['/conductor']);
        console.log('sientre');
      }
    } else{
      spanElement.textContent = 'no se encontraron coincidencias';
    }

    

 }
}
