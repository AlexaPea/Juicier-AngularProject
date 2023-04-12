import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unknown',
  templateUrl: './unknown.component.html',
  styleUrls: ['./unknown.component.css']
})
export class UnknownComponent {

  //service
  constructor(
    private router: Router
    ){};


  backHome(){
    this.router.navigate(['/landing']);
  }
}
