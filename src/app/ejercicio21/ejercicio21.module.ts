import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejercicio21PageRoutingModule } from './ejercicio21-routing.module';

import { Ejercicio21Page } from './ejercicio21.page';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    
    FormsModule,
    IonicModule,
    Ejercicio21PageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [Ejercicio21Page]
})
export class Ejercicio21PageModule {}
