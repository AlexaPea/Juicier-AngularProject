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
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    SlickCarouselModule,
    HttpClientModule,
    FormsModule
    // NgxSliderModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
