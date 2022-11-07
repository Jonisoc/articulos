import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaCarroPageRoutingModule } from './vista-carro-routing.module';

import { VistaCarroPage } from './vista-carro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaCarroPageRoutingModule
  ],
  declarations: [VistaCarroPage]
})
export class VistaCarroPageModule {}
