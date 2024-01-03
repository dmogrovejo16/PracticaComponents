import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio21PageRoutingModule } from './ejercicio21-routing.module';

import { Ejercicio21Page } from './ejercicio21.page';
import { Ejercicio2PageModule } from '../ejercicio2/ejercicio2.module'; 
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@NgModule({
  imports: [
    CommonModule,
    Ejercicio2PageModule,
    FormsModule,
    IonicModule,
    Ejercicio21PageRoutingModule
  ],
  declarations: [Ejercicio21Page]
})
export class Ejercicio21PageModule {}
