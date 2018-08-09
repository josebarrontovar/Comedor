import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';



@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
    //#region  const

    dataTableShopping = 'shopping';
    slash = '/';
    list: any;
    Shopping = [];

   //#endregion

  constructor(public angularFireDatabase: AngularFireDatabase) { }

  getAllShopping() {
    return this.angularFireDatabase.list(this.dataTableShopping );
  }

  createShopping(shopping){
    return this.angularFireDatabase.object(this.dataTableShopping+this.slash+shopping.shoppingId).set(shopping);
  }


}
