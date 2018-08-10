import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../service/authentication/authentication.service';
import { UserService } from '../../service/user/user.service';
import { Router } from '@angular/router';
import { IUserModel } from '../../interface/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //#region Binding ngModel
  name:string;
  lastName:string;
  email:string;
  password:string;
  passwordCheck:string;
  //#endregion
  constructor(public router: Router, public authenticationService: AuthenticationService, public userService :UserService) { }

  ngOnInit() {
  }

  Register(){
    if(this.password === this.passwordCheck){

      const promise = this.authenticationService.emailRegistration(this.email,this.password);
      promise.then((data) =>{
        alert("Registrado con éxito");

        var ObjectRegister : IUserModel = 
        {
          age : 0,
          avatar : "",
          favDish :"",
          gender:"",
          lastName: this.lastName,
          mail:this.email,
          name: this.name,
          userId:data.user.uid,
         };

        this.addUser(ObjectRegister);
        this.router.navigateByUrl("/home");
    
      }).catch((error)=>{
        alert("No se puedo ");
        console.log(error);
      });

    }
    else
    {
      alert("La contraseña no coincide");
    }

  }

  addUser(user){


    const promise = this.userService.createUser(user);
    promise.then(() =>{
      alert("Usuario Creado Exito!");
    }).catch( (error) =>{
      alert("hubo pedo!");
      console.log(error);
    });
  
  
  //#region Binding ngModel " "
  this.name="";
  this.lastName="";
  this.email="";
  this.password="";
  this.passwordCheck="";
  //#endregion
  
    this.router.navigateByUrl("/login");
  }
  
}
