import { Component } from '@angular/core';
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
export class AppComponent {
  title = 'juicier';

    //10 - Is our user verified
    constructor(private cdRef: ChangeDetectorRef) {}
    //ngOnInnit that gets the storage and then sets the variable 
    isVerified: boolean = false;

    ngOnInit() {
      this.isVerified = localStorage.getItem('token') ? true : false;
      this.cdRef.detectChanges();
    }
    
  // selectedLocation: string = '';

  // constructor(private ingrediantService: IngrediantService) {}

  // onLocationChange() {
  //   this.ingrediantService.getAllItems(this.selectedLocation).subscribe((data) => {
  //     console.log(data);
  //   });
  // }

//===========================================================================================
  // ingredients: Ingrediant[] = [];

  // constructor(private ingredientService: IngrediantService) {}

  // ngOnInit() {
  //   this.getIngredientsByLocation('mystic_falls');
  // }

  // getIngredientsByLocation(location: string) {
  //   this.ingredientService.getAllItems(location).subscribe(
  //     (data: Ingrediant[]) => {
  //       this.ingredients = data;
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // onLocationChange(event: Event) {
  //   const location = (event.target as HTMLInputElement).value;
  //   this.getIngredientsByLocation(location);
  // }
}
