import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class StewService {

    //#region  const

    dataTableStew = 'stew';
    slash = '/';
    list: any;
    Stew = [];

   //#endregion

  constructor(public angularFireDatabase: AngularFireDatabase) { }

  getAllStew() {
    return this.angularFireDatabase.list(this.dataTableStew);
  }

  getStewById( stewId ){
    return this.angularFireDatabase.object(this.dataTableStew+this.slash+stewId);
  }

}
