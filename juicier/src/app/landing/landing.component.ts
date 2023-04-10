import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { CraftService } from '../services/craft.service';
import { Burger } from '../models/burger';
import {OnInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [CraftService]
})
export class LandingComponent {

    //service
    constructor(private craftService: CraftService, private elementRef: ElementRef){};


      //list of burgers variable
      listOfBurgers: Burger[] =[];
     


        getRecipes(){
          this.craftService.getAllBurgers().subscribe((data) => {
            this.listOfBurgers = data;
            console.log(data);
            
          })
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
