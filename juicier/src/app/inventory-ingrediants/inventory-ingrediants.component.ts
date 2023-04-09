import { Component } from '@angular/core';
import { IngrediantService } from '../services/ingrediants.service';
import { Ingrediant } from '../models/ingrediant';

@Component({
  selector: 'app-inventory-ingrediants',
  templateUrl: './inventory-ingrediants.component.html',
  styleUrls: ['./inventory-ingrediants.component.css'],
  providers: [IngrediantService]
})
export class InventoryIngrediantsComponent {

    //service
    constructor(private ingrediantService: IngrediantService){};

    //simulate CRUD functionality
   

    breadIngrediants: Ingrediant[] =[];
    pattyIngrediants: Ingrediant[] =[];
    cheeseIngrediants: Ingrediant[] =[];
    garnishIngrediants: Ingrediant[] =[];
    sauceIngrediants: Ingrediant[] =[];

    popupY: number = 0;
    
 ngOnInit(){
  //READ using service
  //5 - update
  this.ingrediantService.getAllItems().subscribe((data) => {
    console.log(data);
    this.breadIngrediants = data.filter(ingredient => ingredient.category === 'Bread');
    this.pattyIngrediants = data.filter(ingredient => ingredient.category === 'Patty');
    this.cheeseIngrediants = data.filter(ingredient => ingredient.category === 'Cheese');
    this.garnishIngrediants = data.filter(ingredient => ingredient.category === 'Garnish');
    this.sauceIngrediants = data.filter(ingredient => ingredient.category === 'Sauce');
  })



}

showPopup = false;
selectedIngrediants: any; //  variable to hold the selected ingredient's data
log(selectedIngrediants: any): void {
  console.log(selectedIngrediants);
}



// @ViewChild('carousel') carouselRef!: ElementRef;

// scrollLeft() {
//   if (this.carouselRef && this.carouselRef.nativeElement) {
//     this.carouselRef.nativeElement.scrollLeft -= 100;
//     console.log('left click');
//   }
// }

// scrollRight() {
//   if (this.carouselRef && this.carouselRef.nativeElement) {
//     this.carouselRef.nativeElement.scrollLeft += 100;
//     console.log('right click');
//   }
// }
}

