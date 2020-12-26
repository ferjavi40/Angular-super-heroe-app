import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// rutas

import {APP_ROUTING} from './app.routes';

//servicios

import { HeroesService } from './servicios/heroes.service';
;





// componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    
    ],
  imports: [
    BrowserModule,
    NgbModule,
    APP_ROUTING
  ],
  providers: [//aqui van los servicios
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
