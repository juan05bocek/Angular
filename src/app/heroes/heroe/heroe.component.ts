import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroes.component.html'
})
export class HeroesComponent{
    nombre:string ='Iroman';
    edad:number = 45;
    
    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
      
    }

    obtenerNombre():string{
        return `${this.nombre} de ${this.edad}`;
    }
    cambiarNombre():string{
        return this.nombre = 'Spiderman';
     }
    
    cambiarEdad():number{
       return this.edad = 32;
    }

}