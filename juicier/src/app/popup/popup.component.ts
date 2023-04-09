import { Component, Input } from '@angular/core';
import { IngrediantService } from '../services/ingrediants.service';
import {Output, EventEmitter, HostListener  } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  providers: [IngrediantService]
})
export class PopupComponent {

  @Input() selectedIngrediants: any;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

 
  getYPosition(selectedIngrediant: any): number {
    switch (selectedIngrediant.category) {
      case 'Bread':
        return 870; // set the y position for bread ingredients
      case 'Patty':
        return 1470; // set the y position for patty ingredients
      case 'Cheese':
        return 2070; // set the y position for cheese ingredients
      case 'Garnish':
        return 2670; // set the y position for cheese ingredients
      case 'Sauce':
        return 3290; // set the y position for cheese ingredients
      default:
        return 0; // default y position
    }
  }

  getDescription(): string {
    switch (this.selectedIngrediants.category) {
      case 'Bread':
        return 'Bread, you\'re the "bun-derful" foundation of every burger! Soft and doughy, you hold all the deliciousness together. With every bite, your "sesame-sational" flavor adds to the overall experience. Let\'s give it up for bread, the MVP of burgers!';
      case 'Patty':
        return 'Patty, you\'re the heart of every burger! You\'re juicy, flavorful, and always the star of the show. Whether grilled, fried, or baked, you never disappoint. Let\'s give it up for the patty, the backbone of burgers!';
      case 'Cheese':
        return 'Cheese, you\'re the creamy goodness that takes burgers to the next level! Whether melted or crumbled, you always bring a richness to the party. Let\'s give it up for cheese, the king of toppings!';
      case 'Garnish':
        return 'Garnish, you\'re the colorful touch that makes burgers a feast for the eyes! Whether lettuce, tomato, onion, or pickle, you add a crispness and crunch that can\'t be beat. Let\'s give it up for garnish, the beauty of burgers!';
      case 'Sauce':
        return 'Sauce, you\'re the secret ingredient that ties everything together! Whether ketchup, mustard, mayo, or special sauce, you add a tangy, sweet, or savory note that elevates the flavors. Let\'s give it up for sauce, the magic of burgers!';
      default:
        return '';
    }
  }

  //service
  constructor(private ingrediantService: IngrediantService){};
  //UPDATE

newAmountPlaceholder: number = 0;

//changes newAmountPlaceholder to current input value
detectAmountChange(e: any){
  this.newAmountPlaceholder = +e.target.value
}


 updateAmount(id: string){
  this.ingrediantService.updateAmount(id, this.newAmountPlaceholder).subscribe((selectedIngrediant) => {
    console.log(selectedIngrediant.amount);

  });
  
 }

 //close pop up
 closePopup(): void {
  this.close.emit();
}
}
