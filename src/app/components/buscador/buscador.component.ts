import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../servicios/heroes.service';
import {VillanosService} from "../../servicios/villanos.service";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  public termino: string = "";
  public heroes: any[] = [];
  public villanos: any[] = [];
  public show: boolean = true

  constructor(private _activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private _villanosServices: VillanosService) {
  }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroe(params['termino']);
      this.villanos = this._villanosServices.buscarVillano(params['termino']);
      if (this.heroes.length || this.villanos.length) {
        this.show = false
      }
      console.log(this.heroes);
      console.log(this.villanos);
    })


  }


}
