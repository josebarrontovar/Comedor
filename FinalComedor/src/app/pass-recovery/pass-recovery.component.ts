import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pass-recovery',
  templateUrl: './pass-recovery.component.html',
  styleUrls: ['./pass-recovery.component.css']
})
export class PassRecoveryComponent implements OnInit {
  //#region Binding ngModel

  email:string;

  //#endregion
  constructor(public authenticationService : AuthenticationService, public router : Router ) { }

  ngOnInit() {
  }
  
  resetPassword(){
    console.log(this.email);
    const promise = this.authenticationService.resetPassword(this.email);
    promise.then((data) =>{
      alert("SE ENVIO CORREO !");
      this.router.navigateByUrl("/login");
    }).catch((error)=>{
      alert("Valio Riel");
      console.log(error);
    });

    this.email=""
  }
  

}
