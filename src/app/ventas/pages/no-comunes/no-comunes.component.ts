import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  // i18nSelect
  nombre: string = 'Menem';
  genero: string = 'femenino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes : string[] = ['Maria', 'Carlos' , 'Juan', 'Pedro', 'Pablo', 'Irma','Menem'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }
  constructor() { }

  ngOnInit(): void {
  }

  borrarCliente(){
    this.clientes.splice(this.clientes.length - 1, 1);
    console.log(this.clientes);
  }

  cambiarPersona(){
    if(this.genero === 'femenino'){
      this.genero='masculino'
    }else{
      this.genero='femenino';
    }
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Neverland'
  }

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve) => {
    setTimeout( () => {
      resolve('Tenemos data de la promesa');
    },2500)
  })
}
