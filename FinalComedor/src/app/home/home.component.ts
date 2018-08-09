import { CartService } from './../cart.service';
import { Router } from '@angular/router';
import { GarrisonService } from './../service/garrison/garrison.service';
import { DrinkService } from './../service/drink/drink.service';
import { StewService } from './../service/stew/stew.service';
import { Component, OnInit } from '@angular/core';
import { IGarrisonModel } from '../interface/garrison';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  meal: any;
  platiloAll = [];
  stewsArray: any;
  garrisonsArray: any;
  drinksArray: any;

  cartArray = [];

  constructor(public stewService: StewService, public drinkService: DrinkService,
    public garrisonService: GarrisonService, public router: Router, public cartService: CartService) {
      this.prepareMeal();
      this.cartArray = this.cartService.showCart();
     }

  ngOnInit() {
  }

  prepareMeal() {
    const streamStew = this.stewService.getAllStew();
    streamStew.valueChanges().subscribe((list) => {
     this.stewsArray = list;
    });

    const streamDrink = this.drinkService.getAllDrinks();
    streamDrink.valueChanges().subscribe((list) => {
      this.drinksArray = list;
    });

    const streamGarrison = this.garrisonService.getAllGarrison();
    streamGarrison.valueChanges().subscribe((list) => {
      this.garrisonsArray = list;
      this.concat();
    });
  }

  concat() {
    for (let i = 0; i < this.stewsArray.length; i++) {
        this.meal = {
          stew: this.stewsArray[i],
          drink: this.drinksArray[i],
          garrison: this.garrisonsArray[i]
        };
        if (this.platiloAll.length <= 15) {
          this.platiloAll.push(this.meal);
        }
    }
  }
  goToDish(id: number) {
    this.router.navigate(['dish', id]);
  }

}
