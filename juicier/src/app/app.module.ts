import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { InventoryIngrediantsComponent } from './inventory-ingrediants/inventory-ingrediants.component';
import { InventoryBurgersComponent } from './inventory-burgers/inventory-burgers.component';
import { CreationStationComponent } from './creation-station/creation-station.component';
import { LocationScreenComponent } from './location-screen/location-screen.component';
import { LoginComponent } from './login/login.component';
import { UnknownComponent } from './unknown/unknown.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './carousel/carousel.component';
import { SliderComponent } from './slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from './popup/popup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthOnlyDirective } from './directives/auth-only.directive';
import { CraftModalComponent } from './craft-modal/craft-modal.component';
import { BuildpopupComponent } from './buildpopup/buildpopup.component';
import { Pipe, PipeTransform } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    InventoryIngrediantsComponent,
    InventoryBurgersComponent,
    CreationStationComponent,
    LocationScreenComponent,
    LoginComponent,
    UnknownComponent,
    CarouselComponent,
    SliderComponent,
    PopupComponent,
    AuthOnlyDirective,
    CraftModalComponent,
    BuildpopupComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    SlickCarouselModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule
    
    // NgxSliderModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) return null;
    return Object.keys(value);
  }
}