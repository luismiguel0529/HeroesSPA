import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../service/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {
  heroes:any[]=[];
  termino:string;

  constructor( private _activateRoute:ActivatedRoute, private _heroesService:HeroesService, private _router:Router) {


   }

  ngOnInit() {
    this._activateRoute.params.subscribe(params =>{

      this.termino =params['ter'];
      this.heroes=this._heroesService.buscarHeroes(params['ter']);
      console.log(this.heroes);
    } )
  }

  verHeroe(idx:number){
    console.log(idx);
    this._router.navigate(['/heroe',idx]);
  }

}
