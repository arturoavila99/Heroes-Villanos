import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-villanos-tarjeta',
  templateUrl: './villanos-tarjeta.component.html',
  styles: [
  ]
})
export class VillanosTarjetaComponent implements OnInit {
  @Input() villano: any = {};
  @Input() index: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
