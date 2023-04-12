import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingrediant } from '../models/ingrediant';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngrediantService {

  items$: BehaviorSubject<Ingrediant[]> = new BehaviorSubject<Ingrediant[]>([]); // initialize the property

  constructor(private http:HttpClient) { 

  }

  //Declare and initialize vars
  url:  string = 'http://localhost:3000/inventory';
  ingrediants: Ingrediant[] = [];
  BreadIngrediants: Ingrediant[] =[];
  selectedLocation: string = sessionStorage.getItem('selectedLocation') ?? '';
  

  //Get All Items
  getAllItems(): void {
    const selectedLocation = sessionStorage.getItem('selectedLocation') ?? '';

   this.http.get<Ingrediant[]>(this.url).pipe(
       map(ingredients => ingredients.filter(
           ingredient => ingredient.location === selectedLocation
       )
   )).subscribe((res) => this.items$.next(res));
}


  locationGetItems(): Observable<Ingrediant[]> {
    return this.http.get<Ingrediant[]>(this.url);
  };

  //CREATE
  createNewItem(item: Ingrediant): Observable<Ingrediant>{
    return this.http.post<Ingrediant>(this.url, item);
  }

   //DELETE
  removeItem(id: string): Observable<unknown>{
    return this.http.delete(`${this.url}/${id}`);
    // this.items.splice(index,1);
  }

  //UPDATE
  updateAmount(id: string, newAmount: number): Observable<Ingrediant>{
    return this.http.put<Ingrediant>(`${this.url}/${id}`, {amount: newAmount});
  }
  
  // Method to update the items in the BehaviorSubject
  updateItems(items: Ingrediant[]): void {
    this.items$.next(items);
  }
}
