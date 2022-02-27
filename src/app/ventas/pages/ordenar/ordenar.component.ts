import { Component, OnInit } from '@angular/core';
import { MayusculasPipe } from '../../pipes/masyusculas.pipe';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayuscula: boolean = false;

  cambiar(){
    this.enMayuscula=!this.enMayuscula;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
