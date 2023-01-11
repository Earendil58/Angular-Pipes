import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  mayusculasBoolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onMayusculas(){
    this.mayusculasBoolean = (this.mayusculasBoolean === false) ? true: false;

  }

}
