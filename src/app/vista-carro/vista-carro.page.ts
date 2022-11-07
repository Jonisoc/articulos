import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo';
import { ArticuloService } from '../services/articulo.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-vista-carro',
  templateUrl: './vista-carro.page.html',
  styleUrls: ['./vista-carro.page.scss'],
})
export class VistaCarroPage implements OnInit {

  public carrito:Articulo[];
  public total:Number;

  constructor(private articuloService:ArticuloService, private toastController: ToastController) { }

  ngOnInit() {
    this.carrito = this.articuloService.getCarro();
    this.total = this.articuloService.getTotal();
  }

  public restCarro(pos:number){
    this.articuloService.restCarro(pos);
    this.carrito = this.articuloService.getCarro();
    this.total = this.articuloService.getTotal();
    this.toastResta('middle');
  }

  public removeCarro(pos:number){
    this.articuloService.removeCarro(pos);
    this.carrito = this.articuloService.getCarro();
    this.total = this.articuloService.getTotal();
    this.toastBorrar('middle');
  }

  async toastResta(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Articulo restado correctamente',
      duration: 500,
      position: position
    });

    await toast.present();
  }

  async toastBorrar(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Articulo eliiminado correctamente',
      duration: 500,
      position: position
    });

    await toast.present();
  }

}
