import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//! PRIMENG MODULES
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset'
import {MenubarModule} from 'primeng/menubar';








@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,



  ]
})
export class PrimeNgModule { }
