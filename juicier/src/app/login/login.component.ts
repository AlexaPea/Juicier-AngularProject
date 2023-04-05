import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { VerifyService } from '../services/verify.service';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private verify: VerifyService, private cdRef: ChangeDetectorRef, private router: Router) {}

  // form controls
  username = new FormControl("");
  favouriteBurger = new FormControl("");

  // 10 - Is our user verified
  isVerified: boolean = false;
  // watch for changes to token in localStorage

  checkVerification(){
    this.verify.checkVerification(this.username.value!, this.favouriteBurger.value!).subscribe((response) =>{
      if(response.success){
        console.log("Verified Successfully");
        localStorage.setItem('token','xhja787');
        this.isVerified = localStorage.getItem('token') !== null; // convert to boolean
        //redirect
        this.router.navigate(['/landing'])
         // Trigger change detection
         this.cdRef.detectChanges();
  
      }else{
        console.log("An error has occurred");        
        console.log(response);        
      }
    })
  }
  
}
