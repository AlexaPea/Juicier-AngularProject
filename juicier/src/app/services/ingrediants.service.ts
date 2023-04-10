import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingrediant } from '../models/ingrediant';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngrediantService {

  constructor(private http:HttpClient) { }

  //3
   url:  string = 'http://localhost:3000/inventory';

  ingrediants: Ingrediant[] = [];
  BreadIngrediants: Ingrediant[] =[];

  selectedLocation: string = sessionStorage.getItem('selectedLocation') ?? '';

  getAllItems(): Observable<Ingrediant[]> {
    const selectedLocation = sessionStorage.getItem('selectedLocation') ?? '';
    return this.http.get<Ingrediant[]>(this.url).pipe(
      map(ingredients => ingredients.filter(ingredient => ingredient.location === selectedLocation))
    );
  }

  //CREATE
  createNewItem(item: Ingrediant): Observable<Ingrediant>{
    return this.http.post<Ingrediant>(this.url, item);
  }

   //DELETE
  removeItem(id: string): Observable<unknown>{
    return this.http.delete(`${this.url}/${id}`);
    //this.items.splice(index,1);
  }

  //UPDATE
  updateAmount(id: string, newAmount: number): Observable<Ingrediant>{
    return this.http.put<Ingrediant>(`${this.url}/${id}`, {amount: newAmount});
  }
}
