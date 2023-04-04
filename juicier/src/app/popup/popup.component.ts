import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  template: `
    <div class="popup">
      <h2>Selected Ingredient:</h2>
      <ul>
        <li>{{ selectedIngrediants.amount }} {{ selectedIngrediants.name }}</li>
      </ul>
    </div>
  `,
})
export class PopupComponent {

  log(selectedIngrediants: any): void {
    console.log(selectedIngrediants);
  }
  
  @Input() selectedIngrediants: any;  
}