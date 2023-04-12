import { Injectable, ChangeDetectorRef  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Burger } from '../models/burger';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CraftService {

  constructor(private http: HttpClient){ }

  url = "http://localhost:3000/burgers";

  selectedLocation = sessionStorage.getItem('selectedLocation');
  burgers: Burger[] = [];

  //function to get all the burgers
  getAllBurgers(): Observable<Burger[]>{
    return this.http.get<Burger[]>(this.url).pipe(
      map(burgers => burgers.filter(burger => burger.location === this.selectedLocation))   
    );
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
