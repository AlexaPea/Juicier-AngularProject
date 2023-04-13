import { Injectable, ChangeDetectorRef  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Burger } from '../models/burger';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CraftService {

  burgers$: BehaviorSubject<Burger[]> = new BehaviorSubject<Burger[]>([]); // initialize the property

  constructor(private http: HttpClient){}

  url = "http://localhost:3000/burgers";

  selectedLocation = sessionStorage.getItem('selectedLocation');
  burgers: Burger[] = [];

  //function to get all the burgers
  // getAllBurgers(): Observable<Burger[]>{
  //   return this.http.get<Burger[]>(this.url).pipe(
  //     map(burgers => burgers.filter(burger => burger.location === this.selectedLocation))   

  //   );
  // }

    //Get All Items
  //   getAllItems(): void {
  //     const selectedLocation = sessionStorage.getItem('selectedLocation') ?? '';
  
  //    this.http.get<Ingrediant[]>(this.url).pipe(
  //        map(ingredients => ingredients.filter(
  //            ingredient => ingredient.location === selectedLocation
  //        )
  //    )).subscribe((res) => this.items$.next(res));
  // }

  
    //Get All Items
    getAllBurgers(): void {
      const selectedLocation = sessionStorage.getItem('selectedLocation') ?? '';
  
     this.http.get<Burger[]>(this.url).pipe(
         map(burgerItems => burgerItems.filter(
          burgers => burgers.location === selectedLocation
         )
     )).subscribe((res) => this. burgers$.next(res));
  }

  //method to craft a burger
  craftBurger(burgerId: string){
    return this.http.post<any>(`${this.url}/craft`, {burgerId})
  }

//create burger
 //Post
 createNewBurger(burger: Burger): Observable<Burger>{
  return this.http.post<Burger>(`${this.url}/create`, burger);
}

}
