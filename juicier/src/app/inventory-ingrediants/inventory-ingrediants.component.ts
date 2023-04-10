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
    constructor(private ingrediantService: IngrediantService, private elementRef: ElementRef, private cdr: ChangeDetectorRef) { }

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
        this.getIngredients();
        this.carousel = this.elementRef.nativeElement.querySelector('.carousel-container');
        this.arrowLeft = this.elementRef.nativeElement.querySelector('.arrow-left');
        this.arrowRight = this.elementRef.nativeElement.querySelector('.arrow-right');

        // Subscribe to the watchSessionStorage method to listen for changes to the session storage
     
            
            };
     
            getIngredients() {
              this.ingrediantService.getAllItems().subscribe((data) => {
                   console.log(data);
                   this.breadIngrediants = data.filter(ingredient => ingredient.category === 'Bread');
                   this.pattyIngrediants = data.filter(ingredient => ingredient.category === 'Patty');
                   this.cheeseIngrediants = data.filter(ingredient => ingredient.category === 'Cheese');
                   this.garnishIngrediants = data.filter(ingredient => ingredient.category === 'Garnish');
                   this.sauceIngrediants = data.filter(ingredient => ingredient.category === 'Sauce');
               });
           }
           
          //  onLocationChange() {
          //       sessionStorage.setItem('selectedLocation', this.selectedLocation);
          //       this.getIngredients();
           
          //  }

public scroll(amount: number) {
  this.carousel.scrollBy({
    left: amount,
    behavior: 'smooth'
  });
}

// onSessionStorageUpdate(callback) {
//   window.addEventListener('storage', function (event) {
//     if (event.storageArea === sessionStorage) {
//       callback();
//     }
//   });
// }

// onSessionStorageUpdate(function () {
//   console.log('Session storage updated');
// });

}

