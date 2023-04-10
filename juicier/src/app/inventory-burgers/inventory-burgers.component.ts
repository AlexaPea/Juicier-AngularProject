import { Component } from '@angular/core';
import { Burger } from '../models/burger';
import { CraftService } from '../services/craft.service';

import {OnInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-inventory-burgers',
  templateUrl: './inventory-burgers.component.html',
  styleUrls: ['./inventory-burgers.component.css'],
  providers: [CraftService]
})
export class InventoryBurgersComponent {

      //service
      constructor(private craftService: CraftService, private elementRef: ElementRef){};


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
      
        // ngOnInit(){
        //   this.getRecipes()
        // }

        //pop up
        showPopup = false;
        selectedBurger: any; //  variable to hold the selected ingredient's data
        log(selectedBurger: any): void {
          console.log(selectedBurger);
        }


        //scroll
        private carousel!: HTMLElement;
        private arrowLeft!: HTMLElement;
        private arrowRight!: HTMLElement;
      
        public scrollAmount = 510; // adjust as needed
      

      
        ngOnInit() {
          this.getRecipes()


          this.carousel = this.elementRef.nativeElement.querySelector('.carousel-container');
          this.arrowLeft = this.elementRef.nativeElement.querySelector('.arrow-left');
          this.arrowRight = this.elementRef.nativeElement.querySelector('.arrow-right');
        }
      
        public scroll(amount: number) {
          this.carousel.scrollBy({
            left: amount,
            behavior: 'smooth'
          });
        }

}
