import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  constructor(private http: HttpClient) { }

  httpUrl: string= "http://localhost:3000/user/login";

  checkVerification(username: string, favouriteBurger: string): Observable<any>{
    return this.http.post<any>(this.httpUrl, {username, favouriteBurger})
  }

}
