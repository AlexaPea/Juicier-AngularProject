import { Component } from '@angular/core';
import { Burger } from '../models/burger';
import { CraftService } from '../services/craft.service';
import { filter } from 'rxjs/operators';
import {OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inventory-burgers',
  templateUrl: './inventory-burgers.component.html',
  styleUrls: ['./inventory-burgers.component.css'],
  providers: [CraftService]
})
export class InventoryBurgersComponent {

      //service
      constructor(
        private craftService: CraftService,
        private elementRef: ElementRef,
        private router: Router
        ){};


      //list of burgers variable
      listOfBurgers: Burger[] =[];
      customBurgers: Burger[] =[];
      regularBurgers: Burger[] =[];

        //preloader
        isCrafting = false;
        


        getRecipes(){
          this.craftService.getAllBurgers().subscribe((data) => {
            this.listOfBurgers = data;
            console.log(data);
            
            // filter burgers with the custom image
            this.customBurgers = this.listOfBurgers.filter(burger => burger.image === '../../assets/burgers/custom.png');
            
            // filter burgers without the custom image
            this.regularBurgers = this.listOfBurgers.filter(burger => burger.image !== '../../assets/burgers/custom.png');
          });
        }
        
    

        //pop up
        showPopup = false;
        selectedBurger: any; //  variable to hold the selected ingredient's data
        log(selectedBurger: any): void {
          console.log(selectedBurger);
        }


        //scroll
        menuCarousel!: HTMLElement;
        specialCarousel!: HTMLElement;
        menuArrowLeft!: HTMLElement;
        menuArrowRight!: HTMLElement;
        specialArrowLeft!: HTMLElement;
        specialArrowRight!: HTMLElement;
        

        public scrollAmount = 510; // adjust as needed
      

      
        ngOnInit() {
          this.getRecipes()

          this.menuCarousel = this.elementRef.nativeElement.querySelector('.menu-carousel');
          this.specialCarousel = this.elementRef.nativeElement.querySelector('.special-carousel');
          this.menuArrowLeft = this.elementRef.nativeElement.querySelector('.menu-carousel .arrow-left');
          this.menuArrowRight = this.elementRef.nativeElement.querySelector('.menu-carousel .arrow-right');
          this.specialArrowLeft = this.elementRef.nativeElement.querySelector('.special-carousel .arrow-left');
          this.specialArrowRight = this.elementRef.nativeElement.querySelector('.special-carousel .arrow-right');
      }
        
        public scroll(amount: number, carousel: HTMLElement) {
          carousel.scrollBy({
              left: amount,
              behavior: 'smooth'
          });
        }
        
        public scrollMenu(amount: number) {
            this.scroll(amount, this.menuCarousel);
        }
        
        public scrollSpecial(amount: number) {
            this.scroll(amount, this.specialCarousel);
        }

        navigate() {
          this.router.navigate(['/creationStation']);
        }
}
