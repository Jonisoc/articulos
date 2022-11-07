import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaArticuloPageRoutingModule } from './vista-articulo-routing.module';

import { VistaArticuloPage } from './vista-articulo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaArticuloPageRoutingModule
  ],
  declarations: [VistaArticuloPage]
})
export class VistaArticuloPageModule {}
