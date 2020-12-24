import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe [] = [];

  constructor( private _heroesService: HeroesService,
               private _rutasParametros: Router) {
    
  }

  ngOnInit(): void {
    
    this.heroes = this._heroesService.getHeroes();

    console.log(this.heroes);
  }

  movRutas(idx: number){
    this._rutasParametros.navigate( ['/heroe', idx] );
  }


}
