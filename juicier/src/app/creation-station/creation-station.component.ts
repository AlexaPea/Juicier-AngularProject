import { Component } from '@angular/core';
import { IngrediantService } from '../services/ingrediants.service';
import { Ingrediant } from '../models/ingrediant';
import { Burger } from '../models/burger';
import { CraftService } from '../services/craft.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation-station',
  templateUrl: './creation-station.component.html',
  styleUrls: ['./creation-station.component.css'],
  providers: [IngrediantService]
})
export class CreationStationComponent {

  //service
  constructor(private ingrediantService: IngrediantService, private craftService: CraftService , private cdRef: ChangeDetectorRef, private router: Router){};

  //define
  breadIngrediants: Ingrediant[] =[];
  pattyIngrediants: Ingrediant[] =[];
  cheeseIngrediants: Ingrediant[] =[];
  garnishIngrediants: Ingrediant[] =[];
  sauceIngrediants: Ingrediant[] =[];
  selectedBreadIngredient!: Ingrediant;
  selectedIngredient!: Ingrediant;
  selectedPattyIngredient!: Ingrediant;
  selectedCheeseIngredient!: Ingrediant;
  selectedGarnishIngredient!: Ingrediant;
  selectedSauceIngredient!: Ingrediant;
  burgers: Burger[] =[]

  isCreated: Boolean = false;
  ngOnInit() {

    this.isCreated = false;
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

  garnishStatus: boolean[] = [false, false, false, false, false];

toggleGarnish(index: number) {
  this.garnishStatus[index] = !this.garnishStatus[index];
  this.selectedIngredient = this.garnishIngrediants[index];
}
  currentIndex = [0, 0, 0, 0, 0];

  onIngredientClick(index: number) {
    switch (index) {
      case 0:
        this.currentIndex[0] = (this.currentIndex[0] + 1) % this.breadIngrediants.length;
        this.selectedBreadIngredient = this.breadIngrediants[this.currentIndex[0]];
        console.log(this.breadIngrediants[this.currentIndex[0]]._id);
        
        this.selectedIngredient = this.breadIngrediants[this.currentIndex[0]];
        break;
      case 1:
        this.currentIndex[1] = (this.currentIndex[1] + 1) % this.pattyIngrediants.length;
        this.selectedPattyIngredient = this.pattyIngrediants[this.currentIndex[1]];
        this.selectedIngredient = this.pattyIngrediants[this.currentIndex[1]];
        break;
      case 2:
        this.currentIndex[2] = (this.currentIndex[2] + 1) % this.cheeseIngrediants.length;
        this.selectedCheeseIngredient = this.cheeseIngrediants[this.currentIndex[2]];
        this.selectedIngredient = this.cheeseIngrediants[this.currentIndex[2]];
        break;
      case 3:
        this.currentIndex[3] = (this.currentIndex[3] + 1) % this.garnishIngrediants.length;
        this.selectedGarnishIngredient = this.garnishIngrediants[this.currentIndex[3]];
        this.selectedIngredient = this.garnishIngrediants[this.currentIndex[3]];
        break;
      case 4:
        this.currentIndex[4] = (this.currentIndex[4] + 1) % this.sauceIngrediants.length;
        this.selectedSauceIngredient = this.sauceIngrediants[this.currentIndex[4]];
        this.selectedIngredient = this.sauceIngrediants[this.currentIndex[4]];
        break;
      default:
        break;
    }
  }

  newBurger =new FormGroup({
    name: new FormControl('', {validators: Validators.required, nonNullable: true}),
  })
  locationSet = sessionStorage.getItem('selectedLocation')!;
//CREATE
createBurger() {

    // Loop through garnish ingredients and add to ingredients array if selected
    const selectedGarnishes = [];
    for (let i = 0; i < this.garnishIngrediants.length; i++) {
      if (this.garnishStatus[i]) {
        selectedGarnishes.push({
          inventoryId: this.garnishIngrediants[i]._id,
          amountNeeded: 1
        });
      }
    }

  var addBurger: Burger = {
    name: this.newBurger.value.name!,
    description: "Customized burgers are like flavor playgrounds!  When you take that first bite, you'll know it's a masterpiece that's been tailored to your every whim!",
    image: '../../assets/burgers/custom.png',
    amount: 0,
    location: this.locationSet ,
    ingrediants:[
      {
        inventoryId: this.breadIngrediants[this.currentIndex[0]]._id,
        amountNeeded: 2
      },
      {
        inventoryId: this.pattyIngrediants[this.currentIndex[1]]._id,
        amountNeeded: 1
      },
      {
        inventoryId: this.cheeseIngrediants[this.currentIndex[2]]._id,
        amountNeeded: 1
      },
      ...selectedGarnishes, // spread selected garnishes array into ingredients array
      {
        inventoryId: this.sauceIngrediants[this.currentIndex[4]]._id,
        amountNeeded: 1
      },
    ]
  }

  this.craftService.createNewBurger(addBurger).subscribe((burger) => {
    this.burgers.push(burger)
    this.isCreated =true;
    this.cdRef.detectChanges();
    
  });
  
 }
 closeCreated() {
  this.isCreated = false;
  this.router.navigate(['/inventoryBurgers']);
  this.cdRef.detectChanges();
}


  
}