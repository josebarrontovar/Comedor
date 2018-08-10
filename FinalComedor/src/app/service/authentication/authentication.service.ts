import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

  import {User as firebaseUser} from 'firebase';
import { FirebaseApp } from '../../../../node_modules/angularfire2';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public usuario: Observable<firebaseUser>;
  public userID: string;
  constructor(public angularFireDatabase: AngularFireDatabase, public angularFireAuth: AngularFireAuth) {
    this.usuario = angularFireAuth.authState;
  }

  
  emailRegistration(email, password) {
    return this.angularFireAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password);
  }

  

 dataReturn() {
   return this.angularFireAuth.authState.pipe(
     map(usuario => this.angularFireDatabase.object(`users/${usuario.uid}`).valueChanges())
   );
    //  const uid = await this.angularFireAuth.auth.onAuthStateChanged(function(user) {
    //   if (user!=null)  { 
    //   this.userID = user.uid;
    //   }
    // });

    //  let userId: string = "gE6Kav5m6qgaRI7FoNqUVG9wIW12";
    //  console.log("NUMERO BUENO"+ this.userID);
    //  this.angularFireDatabase.database.ref(`users/${userId}`).once('value').then(userDetailsAsObject => {
    //   let userDetails = userDetailsAsObject.val() ? userDetailsAsObject.val() : {};
    //   console.log(userDetails);
    // }).catch(err => {
    //   console.log('Error pulling /profile table inside functionName() inside componentName.component.ts');
    //   console.log(err);
    // });
 
  }

 

  
  Login(email, password) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);

  }

  LoginCellPhone(cellPhone, code) {
    return this.angularFireAuth.auth.signInWithPhoneNumber(cellPhone, code);
  }

  loginFacebook(){
    return this.angularFireAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider
    )
  }

  resetPassword(email) {
    return this.angularFireAuth.auth.sendPasswordResetEmail(email);
  }

  getStatus() {
    return this.angularFireAuth.authState;
  }

  logOut() {
    return this.angularFireAuth.auth.signOut();
  }

}