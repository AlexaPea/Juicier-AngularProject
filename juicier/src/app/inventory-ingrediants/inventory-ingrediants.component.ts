import { Component } from '@angular/core';
import { IngrediantService } from '../services/ingrediants.service';
import { Ingrediant } from '../models/ingrediant';
import {ElementRef } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';



@Component({
  selector: 'app-inventory-ingrediants',
  templateUrl: './inventory-ingrediants.component.html',
  styleUrls: ['./inventory-ingrediants.component.css'],
  providers: [IngrediantService]
})
export class InventoryIngrediantsComponent  implements OnInit{

    //service
    constructor(
      private ingrediantService: IngrediantService, 
      private elementRef: ElementRef, 
      private cdr: ChangeDetectorRef) { }

    //simulate CRUD functionality
    breadIngrediants: Ingrediant[] =[];
    pattyIngrediants: Ingrediant[] =[];
    cheeseIngrediants: Ingrediant[] =[];
    garnishIngrediants: Ingrediant[] =[];
    sauceIngrediants: Ingrediant[] =[];

    popupY: number = 0;
    showPopup = false;
    selectedIngrediants: any; //  variable to hold the selected ingredient's data

    //scroll
    private carousel!: HTMLElement;
    private arrowLeft!: HTMLElement;
    private arrowRight!: HTMLElement;
    public scrollAmount = 510; // adjust as needed

    private sessionSub!: Subscription;

    ngOnInit() {

        // Retrieve the ingredients
        this.ingrediantService.getAllItems();
        this.getIngredients();
        this.carousel = this.elementRef.nativeElement.querySelector('.carousel-container');
        this.arrowLeft = this.elementRef.nativeElement.querySelector('.arrow-left');
        this.arrowRight = this.elementRef.nativeElement.querySelector('.arrow-right');
       
    };
     

    getIngredients() {
      this.ingrediantService.items$.subscribe((items) => {
        console.log(items);
        this.cdr.detectChanges();
          this.breadIngrediants = items.filter(ingredient => ingredient.category === 'Bread');
          this.pattyIngrediants = items.filter(ingredient => ingredient.category === 'Patty');
          this.cheeseIngrediants = items.filter(ingredient => ingredient.category === 'Cheese');
          this.garnishIngrediants = items.filter(ingredient => ingredient.category === 'Garnish');
          this.sauceIngrediants = items.filter(ingredient => ingredient.category === 'Sauce');
      });
      this.cdr.detectChanges();
  }
           

public scroll(amount: number) {
  this.carousel.scrollBy({
    left: amount,
    behavior: 'smooth'
  });
}
selectedLocation: string = sessionStorage.getItem('selectedLocation') || 'Mystic Falls';

onLocationChange() {
  sessionStorage.setItem('selectedLocation', this.selectedLocation);
  this.ingrediantService.getAllItems();
  
}



// add this method to update the ingredient list when the event is emitted
onUpdate() {
  // re-fetch the ingredient data and update the local variable
  console.log("On Update runs");
  
  this.ingrediantService.getAllItems();
  this.getIngredients();
}
}

