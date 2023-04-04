import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingrediant } from '../models/ingrediant';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngrediantService {


  //2 - communication between front and back-end
  constructor(private http:HttpClient) { }

  //3
   url:  string = 'http://localhost:3000/inventory';
  // url:  string = 'http://localhost:3000/inventory/bread';
  // urlBread:  string = 'http://localhost:3000/BreadInventory';

  ingrediants: Ingrediant[] = [];
  BreadIngrediants: Ingrediant[] =[];


  //READ ALL
  // getAllItems(): Observable<Ingrediant[]>{
  //   //Call http to backend server
  //   let outputIngrediant = this.http.get<Ingrediant[]>(this.url);
  //   return outputIngrediant;
   
  // }


  getAllItems(): Observable<Ingrediant[]>{
    return this.http.get<Ingrediant[]>(this.url).pipe(
      map(ingredients => ingredients.filter(ingredient => ingredient.location === 'Mystic Falls'))   
    );
    }

  // getAllItems(location: string): Observable<Ingrediant[]> {
  //   return this.http.get<Ingrediant[]>(this.url).pipe(
  //     map(ingredients => ingredients.filter(ingredient => ingredient.location === location))
  //   );
  //   }


    getBreadItems(): Observable<Ingrediant[]>{
      return this.http.get<Ingrediant[]>(this.url).pipe(
        map(ingredients => ingredients.filter(ingredient => ingredient.location === 'Mystic Falls'))   
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
  // this.items[index].amount = newAmount;
  // console.log(this.items[index]);
 }

}
