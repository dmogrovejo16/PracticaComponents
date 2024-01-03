import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejercicio21Page } from './ejercicio21.page';

const routes: Routes = [
  {
    path: '',
    component: Ejercicio21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejercicio21PageRoutingModule {}
