import { NgModule, Component } from '@angular/core';
import { ContadorComponent } from './contado.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
         ContadorComponent
    ]


})


export class contadorModule{}