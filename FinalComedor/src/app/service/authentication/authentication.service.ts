import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public angularFireDatabase: AngularFireDatabase, public angularFireAuth: AngularFireAuth) { }

  emailRegistration(email, password) {
    return this.angularFireAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password);
  }

  Login(email, password) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  LoginCellPhone(cellPhone,code) {
    return this.angularFireAuth.auth.signInWithPhoneNumber(cellPhone,code);
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
