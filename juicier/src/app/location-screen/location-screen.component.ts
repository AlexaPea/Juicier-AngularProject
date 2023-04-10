import { Component } from '@angular/core';

@Component({
  selector: 'app-location-screen',
  templateUrl: './location-screen.component.html',
  styleUrls: ['./location-screen.component.css']
})
export class LocationScreenComponent {

  //Initialise
  selectedImage1: string = 'Mystic Falls';
  selectedImage2: string = '';
  selectedImage3: string = '';

  selectedLocation: string = '';
  locationName= 'Mystic Falls';
  locationDescription = "Introducing the juiciest franchise in Mystic Falls! Sink your teeth into our fang-tastic burgers and experience a world of flavor. Whether you're a vampire or a werewolf, our menu has something for everyone. Come on down and take a bite – you won't be disappointed!"
 
 //Descriptions
  mystiDescription: string = "Introducing the juiciest franchise in Mystic Falls! Sink your teeth into our fang-tastic burgers and experience a world of flavor. Whether you're a vampire or a werewolf, our menu has something for everyone. Come on down and take a bite – you won't be disappointed!";
  riverdaleDescription: string = "The spot in Riverdale for juicy burgers and good times! Sink your teeth into our mouth-watering burgers and experience a burst of flavor in every bite. Whether you're craving a classic cheeseburger or something a little more adventurous, we've got you covered.";
  sunnyDescription: string = "Sunnydale's Juicier - where we specialize in juicy, delicious burgers made with 100% locally-sourced beef. Our burgers are grilled to perfection and served on freshly-baked buns, with a variety of toppings to choose from. From classic cheeseburgers to our signature Juicier Burger, we've got a burger for every taste.";


  selectImage(imageNumber: number, value: string) {
    if (imageNumber === 1) {
      this.selectedImage1 = value;
      this.selectedImage2 = '';
      this.selectedImage3 = '';
      if (value === 'Mystic Falls') {
        this.locationName = 'Mystic Falls';
        this.locationDescription = this.mystiDescription;
      }
    } else if (imageNumber === 2) {
      this.selectedImage1 = '';
      this.selectedImage2 = value;
      this.selectedImage3 = '';
      if (value === 'Riverdale') {
        this.locationName = 'Riverdale';
        this.locationDescription = this.riverdaleDescription;
      }
    } else if (imageNumber === 3) {
      this.selectedImage1 = '';
      this.selectedImage2 = '';
      this.selectedImage3 = value;
      if (value === 'Sunnydale') {
        this.locationName = 'Sunnydale';
        this.locationDescription = this.sunnyDescription;
      }
    }
  }




}
