import { CartService } from './../cart.service';
import { DrinkService } from './../service/drink/drink.service';
import { GarrisonService } from './../service/garrison/garrison.service';
import { StewService } from './../service/stew/stew.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IStweModel } from '../interface/stew';
import { IGarrisonModel } from '../interface/garrison';
import { IDrinkModel } from '../interface/drink';

@Component({
  selector: 'app-platillo',
  templateUrl: './platillo.component.html',
  styleUrls: ['./platillo.component.css']
})
export class PlatilloComponent implements OnInit {

  // dishDescription = "La milanesa es un filete fino, normalmente de carne vacuna, pasado por huevo batido y luego por pan rallado, que se cocina frito o (menos comúnmente) al horno.";
  // dishName = [
  //   {"Pollo Milanesa"},
  // ];
  // filterValue=0;

  // dish = [
  // {image:"assets/img/pollomilanesa.jpg",description:"La1 milanesa es un filete fino, normalmente de carne vacuna, pasado por huevo batido y luego por pan rallado, que se cocina frito o (menos comúnmente) al horno.", garrison1:"Puré de papa", garrison2:"Sopa de tortilla", drink:"Refresco", stew:"Pollo Milanesa", price:"85"},
  // {image:"assets/img/pollomilanesa.jpg",description:"La2 milanesa es un filete fino, normalmente de carne vacuna, pasado por huevo batido y luego por pan rallado, que se cocina frito o (menos comúnmente) al horno.", garrison1:"Puré de papa", garrison2:"Sopa de tortilla", drink:"Refresco", stew:"Pollo Milanesa", price:"85"},
  // {image:"assets/img/pollomilanesa.jpg",description:"La3 milanesa es un filete fino, normalmente de carne vacuna, pasado por huevo batido y luego por pan rallado, que se cocina frito o (menos comúnmente) al horno.", garrison1:"Puré de papa", garrison2:"Sopa de tortilla", drink:"Refresco", stew:"Pollo Milanesa", price:"85"},
  // {image:"assets/img/pollomilanesa.jpg",description:"La4 milanesa es un filete fino, normalmente de carne vacuna, pasado por huevo batido y luego por pan rallado, que se cocina frito o (menos comúnmente) al horno.", garrison1:"Puré de papa", garrison2:"Sopa de tortilla", drink:"Refresco", stew:"Pollo Milanesa", price:"85"},
  // ];

  id:any;
  stewObject: IStweModel;
  garrisonObject: IGarrisonModel;
  drinkObject: IDrinkModel;
  totalPrice:number = 0;

  constructor(public activatedRoute: ActivatedRoute, public stewService: StewService,
      public garrisonService: GarrisonService, public drinkService:DrinkService,
      public router: Router, public cartService: CartService
    ) {


    this.id = activatedRoute.snapshot.params['id'];

    const streamStew = this.stewService.getStewById(this.id);
    streamStew.valueChanges().subscribe((stewResult: IStweModel)=>{
      this.stewObject={
        description: stewResult.description,
        image:stewResult.image,
        price:stewResult.price,
        name:stewResult.name,
        stewId:stewResult.stewId,
      };   
      this.totalPrice = this.totalPrice+stewResult.price;
      // console.log(this.stewObject);
    });

    const streamGarrison = this.garrisonService.getGarrisonById(this.id);
    streamGarrison.valueChanges().subscribe((garrisonResult: IGarrisonModel)=>{
      this.garrisonObject={
        description: garrisonResult.description,
        image:garrisonResult.image,
        price:garrisonResult.price,
        name:garrisonResult.name,
        garrisonId:garrisonResult.garrisonId,
      };   
      // console.log(this.garrisonObject);
      this.totalPrice = this.totalPrice+garrisonResult.price;
    });

    const streamDrink = this.drinkService.getDrinkById(this.id);
    streamDrink.valueChanges().subscribe((drinkResult: IDrinkModel)=>{
      this.drinkObject={
        description: drinkResult.description,
        image:drinkResult.image,
        price:drinkResult.price,
        name:drinkResult.name,
        drinkId:drinkResult.drinkId,
      };   
      // console.log(this.drinkObject);
      this.totalPrice = this.totalPrice+drinkResult.price;
    });




   }

  ngOnInit() {
  }

  goToCart() {
    this.cartService.pushToCart(this.id);
    this.router.navigateByUrl('/home');
  }


}

