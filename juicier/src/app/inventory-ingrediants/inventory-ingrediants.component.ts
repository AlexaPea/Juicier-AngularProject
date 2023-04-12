import { Component } from '@angular/core';
import { IngrediantService } from '../services/ingrediants.service';
import { Ingrediant } from '../models/ingrediant';
import {ElementRef } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, takeUntil, Observable, of, finalize, take } from 'rxjs';
import { BaseComponent } from '../_shared/abstract/component.base';



@Component({
  selector: 'app-inventory-ingrediants',
  templateUrl: './inventory-ingrediants.component.html',
  styleUrls: ['./inventory-ingrediants.component.css'],
  providers: [IngrediantService]
})
export class InventoryIngrediantsComponent extends BaseComponent implements OnInit, OnDestroy{

    //service
    constructor(
      private ingrediantService: IngrediantService, 
      private elementRef: ElementRef, 
      private cdr: ChangeDetectorRef
      ) { 
        super();
      }

    //simulate CRUD functionality
    breadIngrediants$: Observable<Ingrediant[]> = new Observable<Ingrediant[]>;
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


    ngOnInit() {
        // Retrieve the ingredients
        this.initializeIngrediants();
        this.initializeIngredientListener();

        this.carousel = this.elementRef.nativeElement.querySelector('.carousel-container');
        this.arrowLeft = this.elementRef.nativeElement.querySelector('.arrow-left');
        this.arrowRight = this.elementRef.nativeElement.querySelector('.arrow-right');
    };

    ngOnDestroy(): void {
      this.unsubscribe();
    }
     
    async initializeIngrediants() {
      this.ingrediantService.getAllItems().then((ingredients) => {ingredients.pipe(take(1), finalize(() => {})).subscribe((items) => {
        this.ingrediantService.items$.next(items);
          console.log("Items from service", items);
          this.breadIngrediants$ = of(items.filter(ingredient => ingredient.category === 'Bread'));
          // this.pattyIngrediants = items.filter(ingredient => ingredient.category === 'Patty');
          // this.cheeseIngrediants = items.filter(ingredient => ingredient.category === 'Cheese');
          // this.garnishIngrediants = items.filter(ingredient => ingredient.category === 'Garnish');
          // this.sauceIngrediants = items.filter(ingredient => ingredient.category === 'Sauce');
        
      });
    })};
           

public scroll(amount: number) {
  this.carousel.scrollBy({
    left: amount,
    behavior: 'smooth'
  });
}

initializeIngredientListener(){
  console.log("1");
  
  this.ingrediantService.items$.pipe(
    takeUntil(this.destroy$)
  ).subscribe((data: Ingrediant[]) => {
    console.log(2);
    
    this.breadIngrediants$ = of(data.filter(ingredient => ingredient.category === 'Bread'));
    // this.pattyIngrediants = data.filter(ingredient => ingredient.category === 'Patty');
    // this.cheeseIngrediants = data.filter(ingredient => ingredient.category === 'Cheese');
    // this.garnishIngrediants = data.filter(ingredient => ingredient.category === 'Garnish');
    // this.sauceIngrediants = data.filter(ingredient => ingredient.category === 'Sauce');
  })
}

}

