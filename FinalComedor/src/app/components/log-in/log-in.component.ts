import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../../service/authentication/authentication.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

    //#region Binding ngModel
    email:string;
    password:string;  
    closeResult: string;
    public isCollapsed = false;
    //#endregion

  constructor(public router: Router, public authenticationService: AuthenticationService, private modalService: NgbModal) {  }

  iniciarSesionConFacebook(){
  
     this.authenticationService.loginFacebook().then((facebook) =>{
       this.router.navigate(['/']);
     })
     .catch(err=>{
       alert(err);
       console.error(err);
     })
   }


  login() {

    const promise = this.authenticationService.Login(this.email, this.password);
    
    console.log(promise);
    promise.then((data) => {

      alert('Se inicio sesión');
      this.router.navigateByUrl('/home');

    }).catch((error) => {

      alert('Valio Riel');
      console.log(error);

    });

    //#region Binding ngModel " "
    this.email = '';
    this.password = '';
    //#endregion
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit() {
  }


 
  

}
