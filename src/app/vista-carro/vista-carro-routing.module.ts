import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaCarroPage } from './vista-carro.page';

const routes: Routes = [
  {
    path: '',
    component: VistaCarroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaCarroPageRoutingModule {}
