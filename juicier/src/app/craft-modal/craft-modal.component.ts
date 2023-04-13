import { Component } from '@angular/core';
import { Burger } from '../models/burger';
import { CraftService } from '../services/craft.service';

@Component({
  selector: 'app-craft-modal',
  templateUrl: './craft-modal.component.html',
  styleUrls: ['./craft-modal.component.css']
})

export class CraftModalComponent {
  constructor(private craft: CraftService) {}

  //list of burgers variable
  listOfBurgers: Burger[] =[];

  //preloader
  isCrafting = false;


  getBurgers(){
    this.craft.burgers$.subscribe((data) => {
      this.listOfBurgers = data;
      console.log(data);
      
    })
  }

  ngOnInit(){
    this.getBurgers()
  }

  //craft Burger
  craftBurger(burgerId: string){

    this.isCrafting=true;//preloader

    this.craft.craftBurger(burgerId).subscribe((response) => {
      this.isCrafting=false;//preloader
      if(response.success){
        this.getBurgers();
      }
    })
  }
}
