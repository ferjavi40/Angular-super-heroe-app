import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  

  constructor( private activatedRoute:ActivatedRoute,      
                        private _heroesService:HeroesService,
                        private _rutasParametros: Router) {

   }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      
      this.heroes = this._heroesService.buscarHeroes(params ['termino'] );
      console.log(this.heroes);
    });
  }

  movRutas(idx: number){
    this._rutasParametros.navigate( ['/heroe', idx] );
  }

}
