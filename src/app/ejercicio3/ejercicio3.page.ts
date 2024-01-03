import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.page.html',
  styleUrls: ['./ejercicio3.page.scss'],
})
export class Ejercicio3Page implements OnInit {
  colores = ['#FF5733', '#33FF57', '#5733FF', '#FF3333', '#33FFFF'];
  number= 0;
  constructor() { }
 
  ngOnInit() {
  }

}
