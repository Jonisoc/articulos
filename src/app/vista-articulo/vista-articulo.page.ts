import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo';
import { ArticuloService } from '../services/articulo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista-articulo',
  templateUrl: './vista-articulo.page.html',
  styleUrls: ['./vista-articulo.page.scss'],
})
export class VistaArticuloPage implements OnInit {

  public articulo:Articulo;

  constructor(private articuloService:ArticuloService , private aRoute: ActivatedRoute) { }

  ngOnInit() {
    this.aRoute.queryParams.subscribe(
      (params)=>{
        this.articulo = this.articuloService.getArticuloByID(params.id);
      }
    );
  }
}