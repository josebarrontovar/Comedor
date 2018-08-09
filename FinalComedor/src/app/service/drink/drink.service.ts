import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

    //#region  const
    
    dataTableDrinks = 'drinks';
    slash = '/';
    list: any;
    Drinks = [];
 
   //#endregion

  constructor(public angularFireDatabase: AngularFireDatabase) { }

  getAllDrinks() {
    return this.angularFireDatabase.list(this.dataTableDrinks );
  }
  getDrinkById( drinkId ){
    return this.angularFireDatabase.object(this.dataTableDrinks +this.slash+drinkId);
  }


}
