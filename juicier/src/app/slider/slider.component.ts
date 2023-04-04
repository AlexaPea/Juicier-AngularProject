import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true
  };

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Slide 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Slide 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ]

}
