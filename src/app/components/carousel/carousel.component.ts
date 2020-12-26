import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  imagenes: any [] = [
    {
      nombre: 'batman',
      img: 'assets/carousel/1.jpg'
    },
    {
      nombre: 'batman2',
      img: 'assets/carousel/2.jpg'
    },
    {
      nombre: 'batman3',
      img: 'assets/carousel/3.jpg'
    },
    {
      nombre: 'batman4',
      img: 'assets/carousel/4.jpg'
    }

  ]

  constructor( private _config: NgbCarouselConfig) {

    _config.interval = 2000;
   }

  ngOnInit(): void {
  }

}
