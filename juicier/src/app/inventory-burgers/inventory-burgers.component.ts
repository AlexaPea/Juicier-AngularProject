import { Component } from '@angular/core';
import { Burger } from '../models/burger';
import { CraftService } from '../services/craft.service';

@Component({
  selector: 'app-inventory-burgers',
  templateUrl: './inventory-burgers.component.html',
  styleUrls: ['./inventory-burgers.component.css'],
  providers: [CraftService]
})
export class InventoryBurgersComponent {

      //service
      constructor(private craftService: CraftService){};


      //list of burgers variable
      listOfBurgers: Burger[] =[];

        //preloader
        isCrafting = false;

        getRecipes(){
          this.craftService.getAllBurgers().subscribe((data) => {
            this.listOfBurgers = data;
            console.log(data);
            
          })
        }
      
        ngOnInit(){
          this.getRecipes()
        }

        //pop up
        showPopup = false;
        selectedBurger: any; //  variable to hold the selected ingredient's data
        log(selectedBurger: any): void {
          console.log(selectedBurger);
        }


}
