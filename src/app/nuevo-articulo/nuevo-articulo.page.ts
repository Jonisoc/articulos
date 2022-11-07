import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticuloService } from '../services/articulo.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-articulo',
  templateUrl: './nuevo-articulo.page.html',
  styleUrls: ['./nuevo-articulo.page.scss'],
})
export class NuevoArticuloPage implements OnInit {

  public nombre: string;
  public descripcion: string;
  public precio: number;
  public photo: string;
  @ViewChild('enName', {static: false}) ionInName: { setFocus: () => void; };

  constructor(private articuloService:ArticuloService, private toastController: ToastController) { }

  ngOnInit() {
  }

  public addArticulo(){
    this.articuloService.addArticulos(this.nombre, this.descripcion, this.precio, this.photo);
    this.mensajeAgregado('bottom')
    this.nombre = "";
    this.descripcion = "";
    this.precio = null;
    this.photo = "";
    this.ionInName.setFocus();
  }

  async mensajeAgregado(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Articulo creado correctamente',
      duration: 500,
      position: position
    });

    await toast.present();
  }

  public randImg(){
    this.photo = "https://picsum.photos/500/?random=" + (Math.floor(Math.random() * 10000) + 1).toString();
  }

}
