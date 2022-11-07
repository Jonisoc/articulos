import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaArticuloPage } from './vista-articulo.page';

const routes: Routes = [
  {
    path: '',
    component: VistaArticuloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaArticuloPageRoutingModule {}
