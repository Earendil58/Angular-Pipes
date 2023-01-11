import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {

  ventasNetas: number = 25_678_945.58975645465;
  porcentaje: number = 0.48545;

  constructor() { }

  ngOnInit(): void {
  }

}
