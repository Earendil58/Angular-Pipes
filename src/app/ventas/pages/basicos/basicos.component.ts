import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower : string = 'menem';
  nombreUpper: string = 'MENEM';
  nombreComplete: string = 'CaRlOs MeNeM';

  fecha: Date = new Date(); // día de hoy

  constructor() { }

  ngOnInit(): void {
  }

}
