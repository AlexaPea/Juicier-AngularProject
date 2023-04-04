import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationStationComponent } from './creation-station/creation-station.component';
import { InventoryBurgersComponent } from './inventory-burgers/inventory-burgers.component';
import { InventoryIngrediantsComponent } from './inventory-ingrediants/inventory-ingrediants.component';
import { LandingComponent } from './landing/landing.component';
import { LocationScreenComponent } from './location-screen/location-screen.component';
import { LoginComponent } from './login/login.component';
import { UnknownComponent } from './unknown/unknown.component';


//array with all my routes
//Here we define all the places we can navigate to
const routes: Routes = [
  {path:"landing", component: LandingComponent},
  {path:"inventoryIngrediants", component: InventoryIngrediantsComponent},
  {path:"inventoryBurgers", component: InventoryBurgersComponent}, 
  {path:"creationStation", component: CreationStationComponent}, 
  {path:"locationScreen", component: LocationScreenComponent}, 
  {path:"login", component: LoginComponent}, 
  {path:"", redirectTo: 'landing', pathMatch: "full"}, //redirect to list when site opens
  {path:"**", component: UnknownComponent} //404 page - must be at the bottom
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})





export class AppRoutingModule { }
