import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../service/shopping/shopping.service';
import { IShoppingModel } from '../interface/shopping';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  items = [{
    stew: 'Milanesa de Pollo',
    garrisonOne: 'Pure de papa',
    garrisonTwo: 'Arroz',
    price: '$80',
    img: 'https://cocina-casera.com/wp-content/uploads/2016/08/milanesa-de-pollo.jpg'
  },
  {
    stew: 'Asado de Res',
    garrisonOne: 'Frijol',
    garrisonTwo: 'Ensalada',
    price: '$120',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/05/a0/eb/ab/panama.jpg'
  },
  {
    stew: 'Tamal de Elote',
    garrisonOne: 'Chorizo',
    garrisonTwo: 'Frijol',
    price: '$75',
    img: 'http://www.practirecetas.com/Images/Recetas/TamalesElote.jpeg'
  },
  {
    stew: 'Enchiladas',
    garrisonOne: 'Tostaditas',
    garrisonTwo: 'Arroz',
    price: '$105',
    img: 'https://images-gmi-pmc.edge-generalmills.com/0798b070-1f82-4fa2-91ea-17e8175e44e3.jpg'
  },
  {
    stew: 'Milanesa de Pollo',
    garrisonOne: 'Pure de papa',
    garrisonTwo: 'Arroz',
    price: '$80',
    img: 'https://cocina-casera.com/wp-content/uploads/2016/08/milanesa-de-pollo.jpg'
  },
  {
    stew: 'Asado de Res',
    garrisonOne: 'Frijol',
    garrisonTwo: 'Ensalada',
    price: '$120',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/05/a0/eb/ab/panama.jpg'
  },
  {
    stew: 'Tamal de Elote',
    garrisonOne: 'Chorizo',
    garrisonTwo: 'Frijol',
    price: '$75',
    img: 'http://www.practirecetas.com/Images/Recetas/TamalesElote.jpeg'
  },
  {
    stew: 'Enchiladas',
    garrisonOne: 'Tostaditas',
    garrisonTwo: 'Arroz',
    price: '$105',
    img: 'https://images-gmi-pmc.edge-generalmills.com/0798b070-1f82-4fa2-91ea-17e8175e44e3.jpg'
  }];

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
   this.allShoppingUser = allShopping.filter((shopping : IShoppingModel)=>{ return shopping.userId ==  "0" });
   });
   
  }

}
