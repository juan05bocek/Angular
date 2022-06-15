import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroeModule } from './heroes/heroes.module';
import { contadorModule } from './Contador/contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroeModule,
    contadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }