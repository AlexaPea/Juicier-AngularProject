import { Component, OnInit } from '@angular/core';
import { IngrediantService } from './services/ingrediants.service';
import { ChangeDetectorRef } from '@angular/core';
import { Ingrediant } from './models/ingrediant';
import { Observable } from 'rxjs';

@Component({ //decorator - defines that this is a component
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IngrediantService] 
})
export class AppComponent implements OnInit {
  title = 'juicier';
  selectedLocation: string = sessionStorage.getItem('selectedLocation') || 'Mystic Falls';
  ingredients: Ingrediant[] = [];

  constructor(private ingrediantService: IngrediantService, private cdRef: ChangeDetectorRef) {}

  isVerified: boolean = false;
  breadIngrediants: Ingrediant[] =[];
  pattyIngrediants: Ingrediant[] =[];
  cheeseIngrediants: Ingrediant[] =[];
  garnishIngrediants: Ingrediant[] =[];
  sauceIngrediants: Ingrediant[] =[];


  ngOnInit() {
    this.isVerified = localStorage.getItem('token') ? true : false;
    console.log(this.selectedLocation);
    this.selectedLocation = sessionStorage.getItem('selectedLocation') || 'Mystic Falls';
    // this.getIngredients()
  }

// getIngredients() {
//    this.ingrediantService.getAllItems().subscribe((data) => {
//         console.log(data);
//         this.breadIngrediants = data.filter(ingredient => ingredient.category === 'Bread');
//         this.pattyIngrediants = data.filter(ingredient => ingredient.category === 'Patty');
//         this.cheeseIngrediants = data.filter(ingredient => ingredient.category === 'Cheese');
//         this.garnishIngrediants = data.filter(ingredient => ingredient.category === 'Garnish');
//         this.sauceIngrediants = data.filter(ingredient => ingredient.category === 'Sauce');
//     });
// }

onLocationChange() {
  sessionStorage.setItem('selectedLocation', this.selectedLocation);
  // this.getIngredients();

}
}
