import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../service/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  heroe:any = {};
  constructor( private _activateRoute:ActivatedRoute,private _heroesService:HeroesService) {

    this._activateRoute.params.subscribe( params => {

      this.heroe = this._heroesService.getHeroe(params ['id']);
      console.log(this.heroe);

    })
   }


}
