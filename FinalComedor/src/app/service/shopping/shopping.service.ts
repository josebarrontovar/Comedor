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

   //Instanciamos para poder acceder a las propiedaeds de angularFireDatabase
  constructor(public angularFireDatabase: AngularFireDatabase) { }

  //Funcion para mostrar las compras que tenemos registradas
  getAllShopping() {
    return this.angularFireDatabase.list(this.dataTableShopping );
  }

  //la funcion donde guardamos la compra
  createShopping(shopping){
    console.log(shopping);
    return this.angularFireDatabase.object(this.dataTableShopping+this.slash+shopping.shoppingId).set(shopping);
  }


}
