import { Component, ChangeDetectorRef } from '@angular/core';
import { IngrediantService } from '../services/ingrediants.service';
import { Ingrediant } from '../models/ingrediant';
import { mergeMap, reduce } from 'rxjs/operators';
import { groupBy } from 'lodash';

@Component({
  selector: 'app-location-screen',
  templateUrl: './location-screen.component.html',
  styleUrls: ['./location-screen.component.css'],
  providers: [IngrediantService]
})
export class LocationScreenComponent {


  constructor(
    private ingrediantService: IngrediantService, 
    private cd: ChangeDetectorRef
) { 
  this.getIngredients(); // Call the method to get ingredients on page load
  this.selectedLocation = 'Mystic Falls';
}


  //Initialise
  selectedImage1: string = 'Mystic Falls';
  selectedImage2: string = '';
  selectedImage3: string = '';

  selectedLocation: string = '';
  locationName= 'Mystic Falls';
  locationDescription = "Introducing the juiciest franchise in Mystic Falls! Come on down and take a bite – you won't be disappointed!"
 
 //Descriptions
  mystiDescription: string = "Introducing the juiciest franchise in Mystic Falls! Come on down and take a bite – you won't be disappointed!";
  riverdaleDescription: string = "The spot in Riverdale for juicy burgers and good times! Sink your teeth into our mouth-watering burgers and experience a burst of flavor in every bite.";
  sunnyDescription: string = "Sunnydale's Juicier - where we specialize in juicy, delicious burgers. Our burgers are grilled to perfection and served on freshly-baked buns, with a variety of toppings to choose from.";

  listOfIngrediants: Ingrediant[] =[];
  ingredients: Ingrediant[] = [];
  groupedIngredients: any;

  selectImage(imageNumber: number, value: string) {
    if (imageNumber === 1) {
      this.selectedImage1 = value;
      this.selectedImage2 = '';
      this.selectedImage3 = '';
      if (value === 'Mystic Falls') {
        this.locationName = 'Mystic Falls';
        this.locationDescription = this.mystiDescription;
        this.selectedLocation = 'Mystic Falls';
      }
    } else if (imageNumber === 2) {
      this.selectedImage1 = '';
      this.selectedImage2 = value;
      this.selectedImage3 = '';
      if (value === 'Riverdale') {
        this.locationName = 'Riverdale';
        this.locationDescription = this.riverdaleDescription;
        this.selectedLocation = 'Riverdale';
      }
    } else if (imageNumber === 3) {
      this.selectedImage1 = '';
      this.selectedImage2 = '';
      this.selectedImage3 = value;
      if (value === 'Sunnydale') {
        this.locationName = 'Sunnydale';
        this.locationDescription = this.sunnyDescription;
        this.selectedLocation = 'Sunnydale';
      }
    }
    
    this.getIngredients();
  }
  
ngOnInit(){
  this.selectedLocation = 'Mystic Falls';
  this.getIngredients();
}
getIngredients() {
  const selectedLocation = this.selectedLocation;
  this.ingrediantService.locationGetItems().subscribe((data: Ingrediant[]) => {
    const listOfIngredients = data.filter(ingredient => ingredient.location === selectedLocation);

    console.log(listOfIngredients);

    // Group the ingredients by category
    this.groupedIngredients = groupBy(listOfIngredients, 'category');

    console.log(this.groupedIngredients);
  });
  setTimeout(() => {
    this.cd.detectChanges();
  });
}

isLow(amount: number): boolean {
  return amount <= 10;
}
  

}
