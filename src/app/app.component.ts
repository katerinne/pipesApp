import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';
  nombre: string = 'fernando heRrera';
  valor: number = 1000;
  obj = {
    nombre: 'Fernando'
  }


  mostrarNombre(){
    console.log(this.nombre);
  }
}
