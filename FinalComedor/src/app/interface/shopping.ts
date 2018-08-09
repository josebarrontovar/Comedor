import { IUserModel } from "./user";
import { IStweModel } from "./stew";
import { IDrinkModel } from "./drink";
import { IGarrisonModel } from "./garrison";

export interface IShoppingModel {  
 
    shoppingId:string;
    date:string;
    totalPrice:number;

    userId:string;
    stewId:string;
    drinkId:string;
    garrisonId:string;

    //#region 
    user:IUserModel;
    stew:IStweModel;
    drink:IDrinkModel;
    garrison:IGarrisonModel;
   //#endregion

}
