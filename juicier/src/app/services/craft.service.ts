import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Burger } from '../models/burger';

@Injectable({
  providedIn: 'root'
})
export class CraftService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/burgers";

  //function to get all the burgers
  getAllBurgers(){
    return this.http.get<Burger[]>(this.url);
  }

  //method to craft a burger
  craftBurger(burgerId: string){

    return this.http.post<any>(`${this.url}/craft`, {burgerId})

  }
}
