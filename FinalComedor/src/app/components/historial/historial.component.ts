import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../../service/shopping/shopping.service';
import { IShoppingModel } from '../../interface/shopping';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
 

  allShoppingUser = [];
  userId:string;

  constructor(public shoppingService :  ShoppingService) {  
    
    this.userId = localStorage.getItem('Suscribe');
    this.changeData();
  }

  ngOnInit() {
  
  }
 changeData(){

   const preview =  this.shoppingService.getAllShopping();

   preview.valueChanges().subscribe((allShopping)=>{
   this.allShoppingUser = allShopping.filter((shopping : IShoppingModel)=>{ return shopping});
   });
   
  }

}
