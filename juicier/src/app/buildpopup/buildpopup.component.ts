import { CraftService } from '../services/craft.service';
import { Component, Input } from '@angular/core';
import {Output, EventEmitter, HostListener  } from '@angular/core';
import { Burger } from '../models/burger';
import { Ingrediant } from '../models/ingrediant';

@Component({
  selector: 'app-buildpopup',
  templateUrl: './buildpopup.component.html',
  styleUrls: ['./buildpopup.component.css'],
  providers: [CraftService]
})
export class BuildpopupComponent {
  @Input() selectedBurger: any;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  getYPosition(selectedBurger: any): number {
    if (selectedBurger.image === '../../assets/burgers/custom.png') {
        return 600; // set the y position for bread ingredients
    }else{
       return 0; // set the y position for patty ingredients
    }     
    }




  //service
  constructor(private craftService: CraftService){};

    //preloader
    isCrafting = false;
    //list of burgers variable
    listOfBurgers: Burger[] =[];

    // listOfIngrediants: Burger[] =[];

    getBurgers(){
      this.craftService.getAllBurgers().subscribe((data) => {
        this.listOfBurgers = data;
        console.log(data);
        
      })
    }
  
    ngOnInit(){
      this.getBurgers()
    }

    //get availability of ingrediants
    getAvailabilityClass(ingredient: { inventoryId: { amount: number }, amountNeeded: number }): string {
      if (ingredient.inventoryId.amount >= ingredient.amountNeeded) {
        return 'available';
      } else {
        return 'notAvailable';
      }
    }
    
    
    
  //build burger
    craftBurger(burgerId: string){

      this.isCrafting=true;//preloader

      this.craftService.craftBurger(burgerId).subscribe((response) => {
        this.isCrafting=false;//preloader
        if(response.success){
          this.getBurgers();
        }
      })
    }
 
 //close pop up
 closePopup(): void {
  this.close.emit();
}
}
