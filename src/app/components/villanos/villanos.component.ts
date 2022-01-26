import { Component, OnInit } from '@angular/core';
import { Villano, VillanosService } from 'src/app/servicios/villanos.service';

@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styles: [
  ]
})
export class VillanosComponent implements OnInit {

  villanos: Villano[] = [];

  constructor(private _villanosServices: VillanosService) { }

  ngOnInit(): void {
    this.villanos = this._villanosServices.getVillanos()
    console.log(this.villanos)
  }

}
